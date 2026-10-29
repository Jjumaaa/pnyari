import "server-only";
import fallbackSermons from "@/data/sermons";

// Recent sermons via the official YouTube Data API v3.
// Configuration (server-side env vars, never exposed to the browser):
//   YOUTUBE_API_KEY        required to enable automatic updates
//   YOUTUBE_CHANNEL_ID     optional; otherwise YOUTUBE_CHANNEL_HANDLE is resolved
//   YOUTUBE_CHANNEL_HANDLE optional; defaults to the official @PCEANyariChurch channel
//   YOUTUBE_PLAYLIST_ID    optional; show only this playlist (e.g. a "Sermons" playlist)
//                          instead of every channel upload

const API = "https://www.googleapis.com/youtube/v3";
const DEFAULT_HANDLE = "@PCEANyariChurch";
export const REVALIDATE_SECONDS = 60 * 60;

const VIDEO_ID = /^[A-Za-z0-9_-]{11}$/;
const ID_PATTERN = /^[A-Za-z0-9_-]{10,64}$/;
const HANDLE_PATTERN = /^@?[A-Za-z0-9._-]{3,30}$/;

async function youtubeGet(path, params) {
  const url = new URL(`${API}/${path}`);
  Object.entries({ ...params, key: process.env.YOUTUBE_API_KEY }).forEach(
    ([key, value]) => url.searchParams.set(key, value)
  );

  const res = await fetch(url, {
    next: { revalidate: REVALIDATE_SECONDS, tags: ["youtube"] },
    signal: AbortSignal.timeout(8000),
  });

  if (!res.ok) {
    // Surface the API's reason (e.g. quotaExceeded) without ever logging the key.
    let reason = "";
    try {
      reason = (await res.json())?.error?.errors?.[0]?.reason ?? "";
    } catch {}
    throw new Error(`YouTube API ${path} responded ${res.status} ${reason}`.trim());
  }

  return res.json();
}

async function resolvePlaylistId() {
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID?.trim();
  if (playlistId) {
    if (!ID_PATTERN.test(playlistId)) throw new Error("YOUTUBE_PLAYLIST_ID is malformed");
    return playlistId;
  }

  const channelId = process.env.YOUTUBE_CHANNEL_ID?.trim();
  const handle = (process.env.YOUTUBE_CHANNEL_HANDLE?.trim() || DEFAULT_HANDLE);

  let query;
  if (channelId) {
    if (!ID_PATTERN.test(channelId)) throw new Error("YOUTUBE_CHANNEL_ID is malformed");
    query = { id: channelId };
  } else {
    if (!HANDLE_PATTERN.test(handle)) throw new Error("YOUTUBE_CHANNEL_HANDLE is malformed");
    query = { forHandle: handle.startsWith("@") ? handle : `@${handle}` };
  }

  const data = await youtubeGet("channels", { part: "contentDetails", ...query });
  const uploads = data?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (typeof uploads !== "string" || !ID_PATTERN.test(uploads)) {
    throw new Error("YouTube channel not found or has no uploads playlist");
  }
  return uploads;
}

const timestamp = (date) => (date ? Date.parse(date) : 0);

function toVideo(item) {
  const id = item?.contentDetails?.videoId ?? item?.snippet?.resourceId?.videoId;
  const title = item?.snippet?.title;
  if (typeof id !== "string" || !VIDEO_ID.test(id)) return null;
  if (typeof title !== "string" || !title.trim()) return null;
  // Uploads playlists include private/deleted placeholders.
  if (title === "Private video" || title === "Deleted video") return null;

  const published = item?.contentDetails?.videoPublishedAt ?? item?.snippet?.publishedAt;
  const date = typeof published === "string" && !Number.isNaN(Date.parse(published)) ? published : null;

  return { id, title: title.trim().slice(0, 200), date };
}

/**
 * Returns { videos, source } where source is "youtube" or "fallback".
 * Never throws: any configuration, network, or quota problem falls back to data/sermons.js.
 */
export async function getRecentSermons(limit = 6) {
  const fallback = { videos: fallbackSermons.slice(0, limit), source: "fallback" };

  if (!process.env.YOUTUBE_API_KEY) return fallback;

  try {
    const playlistId = await resolvePlaylistId();
    const data = await youtubeGet("playlistItems", {
      part: "snippet,contentDetails",
      playlistId,
      maxResults: String(Math.min(50, limit * 2)),
    });

    const videos = (Array.isArray(data?.items) ? data.items : [])
      .map(toVideo)
      .filter(Boolean)
      .sort((a, b) => timestamp(b.date) - timestamp(a.date))
      .slice(0, limit);

    if (videos.length === 0) return fallback;
    return { videos, source: "youtube" };
  } catch (error) {
    console.warn(`[sermons] Falling back to saved sermons: ${error.message}`);
    return fallback;
  }
}
