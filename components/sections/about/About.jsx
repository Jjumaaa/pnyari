import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { aboutCards } from "@/data/about";

import ChurchStory from "./ChurchStory";
import Beliefs from "./Beliefs";

export default function About() {
  return (
    <Section background="light" id="about" labelledBy="about-title" className="pt-24 md:pt-32">
      <SectionHeading
        id="about-title"
        eyebrow="About Us"
        title="Who We Are"
        description="A Presbyterian congregation in Nairobi, gathered around Christ and committed to one another."
      />

      <ChurchStory />

      <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-3">
        {aboutCards.map((card, i) => (
          <Card key={card.title} delay={i * 0.1}>
            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sanctuary-blue/5 text-ember-crimson">
              <Icon name={card.icon} className="h-7 w-7" />
            </span>
            <h3 className="mb-3 text-2xl font-bold text-sanctuary-blue">{card.title}</h3>
            <p className="leading-relaxed">{card.text}</p>
          </Card>
        ))}
      </div>

      <Beliefs />
    </Section>
  );
}
