import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { church } from "@/data/church";
import { getRecentSermons } from "@/lib/youtube";
import SermonCard from "./SermonCard";

export default async function Sermons() {
  const { videos } = await getRecentSermons(6);

  return (
    <Section background="dark" id="sermons" labelledBy="sermons-title">
      <SectionHeading
        id="sermons-title"
        tone="dark"
        eyebrow="Sermons"
        title="Recent Messages"
        description="Missed a Sunday or want to hear a message again? Watch our latest services on YouTube."
      />

      {videos.length > 0 ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {videos.map((video, i) => (
            <li key={video.id}>
              <SermonCard video={video} delay={(i % 3) * 0.08} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-white/80">
          New sermons will appear here soon.
        </p>
      )}

      {church.social.youtube && (
        <div className="mt-12 text-center">
          <Button href={church.social.youtube} external icon="youtube">
            Visit Our YouTube Channel
          </Button>
        </div>
      )}
    </Section>
  );
}
