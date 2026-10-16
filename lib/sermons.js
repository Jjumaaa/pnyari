const YOUTUBE_API_BASE_URL = "https://www.googleapis.com/youtube/v3";
const YOUTUBE_CHANNEL_HANDLE =
  process.env.YOUTUBE_CHANNEL_HANDLE || "@pceanyarichurch";
const CACHE_SECONDS = 60 * 60;
const RECENT_UPLOAD_LIMIT = 6;

async function fetchYouTubeResource(resource, params, apiKey) {
  const searchParams = new URLSearchParams(params);
  searchParams.set("key", apiKey);

  const response = await fetch(
    `${YOUTUBE_API_BASE_URL}/${resource}?${searchParams.toString()}`,
    { next: { revalidate: CACHE_SECONDS } },
  );

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  return payload.error ? null : payload;
}

function formatPublishedDate(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-KE", {
    dateStyle: "medium",
    timeZone: "Africa/Nairobi",
  }).format(date);
}

export async function getRecentSermons() {
  const apiKey = process.env.YOUTUBE_API_KEY;

  // Keep the current static sermon list available until the API key is configured.
  if (!apiKey) {
    return null;
  }

  try {
    const channel = await fetchYouTubeResource(
      "channels",
      {
        part: "contentDetails",
        forHandle: YOUTUBE_CHANNEL_HANDLE,
      },
      apiKey,
    );

    const uploadsPlaylistId =
      channel?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) {
      return null;
    }

    const playlist = await fetchYouTubeResource(
      "playlistItems",
      {
        part: "snippet,contentDetails",
        playlistId: uploadsPlaylistId,
        maxResults: String(RECENT_UPLOAD_LIMIT),
      },
      apiKey,
    );

    if (!playlist?.items?.length) {
      return null;
    }

    const recentUploads = playlist.items
      .map((item) => {
        const videoId =
          item.contentDetails?.videoId || item.snippet?.resourceId?.videoId;
        const title = item.snippet?.title;

        if (
          !videoId ||
          !title ||
          title === "Private video" ||
          title === "Deleted video"
        ) {
          return null;
        }

        return {
          id: videoId,
          youtubeId: videoId,
          title,
          series: item.snippet.channelTitle || "PCEA Nyari Church",
          date: formatPublishedDate(
            item.contentDetails?.videoPublishedAt || item.snippet?.publishedAt,
          ),
          thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
          videoLink: `https://www.youtube.com/watch?v=${videoId}`,
        };
      })
      .filter(Boolean);

    return recentUploads.length ? recentUploads : null;
  } catch {
    // The homepage should continue to render with its static fallback if YouTube
    // is unavailable or returns an unexpected response.
    return null;
  }
}
