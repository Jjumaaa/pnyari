import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import { church, whatsappLink } from "@/data/church";

export default function WhatsApp() {
  const community = church.whatsapp.communityUrl;

  return (
    <section
      id="whatsapp"
      aria-labelledby="whatsapp-title"
      className="bg-white px-4 py-16 sm:px-6 md:py-20 lg:px-8"
    >
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-br from-sanctuary-blue to-sanctuary-deep p-8 text-white shadow-2xl sm:p-12">
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#1DA851]/20 blur-3xl"
          />
          <div className="relative grid items-center gap-8 md:grid-cols-[auto_1fr]">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1DA851] shadow-lg">
              <Icon name="whatsapp" className="h-11 w-11" />
            </span>

            <div>
              <h2 id="whatsapp-title" className="text-3xl font-bold sm:text-4xl">
                Chat With Us on WhatsApp
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-white/85">
                Have a question, a prayer request, or want to receive church updates?
                Send us a message and someone from the church will get back to you.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={whatsappLink()} external variant="whatsapp" icon="whatsapp">
                  Message Us on WhatsApp
                </Button>
                <Button
                  href={whatsappLink("Hello PCEA Nyari Church, I would like to receive church updates and announcements on WhatsApp.")}
                  external
                  variant="secondary"
                >
                  Request Church Updates
                </Button>
                {community && (
                  <Button href={community} external variant="secondary">
                    Join Our WhatsApp Community
                  </Button>
                )}
              </div>

              <p className="mt-4 flex items-start gap-2 text-sm text-white/75">
                <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0" />
                WhatsApp opens with a message ready for you — just press Send.
                We will reply as soon as we can.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
