# PCEA Nyari Church Website

The website for PCEA Nyari Church, Red Hill Link Rd, Nairobi — *Welcomed. Accepted. Loved. Shepherded.*

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4 and framer-motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in values (see below)
npm run dev                  # http://localhost:3000
```

| Command         | Purpose                         |
| --------------- | ------------------------------- |
| `npm run dev`   | Local development server        |
| `npm run build` | Production build                |
| `npm start`     | Serve the production build      |
| `npm run lint`  | ESLint                          |

## Environment variables

All are optional — the site builds and works without them.

| Variable                 | Where used  | Notes |
| ------------------------ | ----------- | ----- |
| `NEXT_PUBLIC_SITE_URL`   | SEO         | Public URL of the site (e.g. `https://pceanyari.org`). Used for canonical URL, Open Graph, sitemap and robots.txt. **Set this in production.** |
| `YOUTUBE_API_KEY`        | Server only | YouTube Data API v3 key. Without it, the Sermons section shows the saved list in `data/sermons.js`. |
| `YOUTUBE_CHANNEL_ID`     | Server only | Optional. Overrides the channel handle lookup. |
| `YOUTUBE_CHANNEL_HANDLE` | Server only | Optional. Defaults to the official `@PCEANyariChurch`. |
| `YOUTUBE_PLAYLIST_ID`    | Server only | Optional. Show only one playlist (e.g. "Sermons") instead of all uploads. |

Never commit `.env.local`. Only variables prefixed `NEXT_PUBLIC_` reach the browser; the YouTube key stays on the server.

### Setting up the YouTube API key

1. In [Google Cloud Console](https://console.cloud.google.com/), create a project.
2. Enable **YouTube Data API v3**.
3. Create an **API key** under *Credentials* and restrict it to the YouTube Data API v3.
4. Add it as `YOUTUBE_API_KEY` in your hosting provider's environment settings (and `.env.local` locally).

## How recent sermons work

`lib/youtube.js` uses the official YouTube Data API v3. It resolves the channel's uploads playlist, fetches the newest videos and shows the latest six.

- **Caching:** responses are cached and the page is regenerated at most once an hour (`revalidate = 3600`). That works out to roughly 48 API units a day, well inside the free 10,000-unit quota.
- **Fallback:** any of these leads to the saved sermons in `data/sermons.js`: a missing key, a bad config, a network error, quota exhaustion or an empty channel. A warning is logged on the server without the key.
- **Safety:** video IDs and IDs from the API are validated before use. Only titles and dates are rendered, as escaped text.

## Updating content

Content lives in `data/`. Edit these files and redeploy; no component changes are needed. They are deliberately plain data so a future admin/CMS can replace them.

| File                | Contents |
| ------------------- | -------- |
| `data/church.js`    | Name, motto, yearly theme, address, phone, email, WhatsApp, social links, Sunday service times |
| `data/about.js`     | Mission / vision / values cards |
| `data/beliefs.js`   | "What We Believe" entries |
| `data/services.js`  | What to expect in worship; other gatherings (`verified: true` to show) |
| `data/newHere.js`   | Visit steps, FAQs, next steps |
| `data/ministries.js`| Ministries. Set `image`, `meetingTime`, `leader` once confirmed |
| `data/events.js`    | Events with ISO `date` (`YYYY-MM-DD`). They move from "upcoming" to "past" automatically. Only `verified: true` events are shown |
| `data/giving.js`    | Official giving methods. **Empty until confirmed by the church office** |
| `data/sermons.js`   | Fallback sermons used when YouTube is unavailable |

Images go in `public/images/` (e.g. `public/images/ministries/choir.jpg`). Ideal ministry photos are landscape and at least 1200px wide.

Fields set to `null` are treated as unknown and hidden. Please don't fill in details that haven't been confirmed.

## Project structure

```
app/            layout (metadata, JSON-LD), page, sitemap, robots, icons, OG image, 404/error
components/
  layout/       Navbar, Footer, floating WhatsApp button
  sections/     One folder per page section
  ui/           Button, Card, Section, SectionHeading, Divider, Icon, Reveal
  providers/    MotionProvider (respects reduced-motion settings)
data/           Editable church content
lib/            YouTube integration, date helpers
```

## Deployment

This is a standard Next.js app. It can be deployed to Vercel or any Node host (`npm run build && npm start`). Set `NEXT_PUBLIC_SITE_URL` and `YOUTUBE_API_KEY` in the host's environment settings.
