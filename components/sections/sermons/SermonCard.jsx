import Image from "next/image";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function SermonCard({ sermon }) {

  const thumbnail = 
    `https://img.youtube.com/vi/${sermon.youtubeId}/maxresdefault.jpg`;

  const videoLink =
    `https://www.youtube.com/watch?v=${sermon.youtubeId}`;

  return (
    <Card className="overflow-hidden p-0">

      <div className="relative">

        <Image
          src={thumbnail}
          alt={sermon.title}
          width={600}
          height={400}
          className="
            h-56
            w-full
            object-cover
          "
        />

        {/* Play Overlay */}
        <div
          className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-black/30
          "
        >
          <div
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


      <div className="space-y-4 p-6">

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


        <p className="text-sm text-gray-600">
          {sermon.speaker}
        </p>


        <p className="text-sm text-gray-500">
          {sermon.date}
        </p>


        <Button
          href={videoLink}
          external
        >
          Watch Sermon
        </Button>

      </div>

    </Card>
  );
}