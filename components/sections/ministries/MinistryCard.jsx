import Image from "next/image";
import Card from "@/components/ui/Card";

export default function MinistryCard({ ministry }) {
  return (
    <Card className="overflow-hidden p-0">

      <Image
        src={ministry.image}
        alt={ministry.title}
        width={600}
        height={400}
        className="h-56 w-full object-cover"
      />

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
          {ministry.subtitle}
        </p>

        <h3
          className="
            text-2xl
            font-bold
            text-[var(--color-sanctuary-blue)]
          "
        >
          {ministry.title}
        </h3>

        <p className="text-[var(--color-charcoal-slate)] leading-relaxed">
          {ministry.description}
        </p>

        <div className="space-y-1 text-sm text-gray-600">

          <p>
            <strong>Leader:</strong> {ministry.leader}
          </p>

          <p>
            <strong>Meeting:</strong> {ministry.meetingTime}
          </p>

        </div>

      </div>

    </Card>
  );
}