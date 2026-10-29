import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { formatDate } from "@/lib/format";

export default function SermonCard({ video, delay }) {
  const date = video.date ? formatDate(video.date) : video.dateLabel;

  return (
    <Reveal delay={delay} className="h-full">
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/10 hover:ring-brushed-gold/50"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-sanctuary-deep">
          {/* hqdefault is 4:3 with letterboxing; object-cover crops it to a clean 16:9. */}
          <Image
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt=""
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-sanctuary-deep/25 transition-colors group-hover:bg-sanctuary-deep/10">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 pl-1 text-ember-crimson shadow-lg transition-transform group-hover:scale-110">
              <Icon name="play" className="h-6 w-6" />
            </span>
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {date && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brushed-gold">
              {date}
            </p>
          )}
          <h3 className="mt-2 line-clamp-3 text-lg font-bold leading-snug text-white sm:text-xl">
            {video.title}
          </h3>
          {video.speaker && <p className="mt-2 text-sm text-white/75">{video.speaker}</p>}
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brushed-gold">
            Watch on YouTube
            <Icon name="external" className="h-4 w-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </span>
        </div>
      </a>
    </Reveal>
  );
}
