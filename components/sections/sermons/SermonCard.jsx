import Image from "next/image";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function SermonCard({ sermon }) {
  const thumbnail =
    sermon.thumbnail ||
    `https://img.youtube.com/vi/${sermon.youtubeId}/hqdefault.jpg`;
  const videoLink =
    sermon.videoLink || `https://www.youtube.com/watch?v=${sermon.youtubeId}`;

  return (
    <Card
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        p-0
      "
    >
      <div
        className="
          relative
          aspect-video
          w-full
          overflow-hidden
        "
      >
        <Image
          src={thumbnail}
          alt={sermon.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-contain"
        />

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-black/15
          "
        >
          <div
            aria-hidden="true"
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-full
              bg-white
              text-xl
              text-[var(--color-sanctuary-blue)]
            "
          >
            ▶
          </div>
        </div>
      </div>

      <div
        className="
          flex
          flex-1
          flex-col
          space-y-4
          p-6
        "
      >
        <p
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[var(--color-brushed-gold)]
          "
        >
          {sermon.series}
        </p>

        <h3
          className="
            text-2xl
            font-bold
            text-[var(--color-sanctuary-blue)]
          "
        >
          {sermon.title}
        </h3>

        {sermon.speaker ? (
          <p className="text-sm text-gray-600">{sermon.speaker}</p>
        ) : null}

        {sermon.date ? (
          <p className="text-sm text-gray-500">{sermon.date}</p>
        ) : null}

        <div className="mt-auto pt-4">
          <Button href={videoLink} external>
            Watch Video
          </Button>
        </div>
      </div>
    </Card>
  );
}
