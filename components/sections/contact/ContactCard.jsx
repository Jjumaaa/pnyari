import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";

export default function ContactCard({ icon, title, href, external = false, action, children }) {
  return (
    <Card interactive className="relative flex flex-col items-center text-center">
      <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-sanctuary-blue text-brushed-gold">
        <Icon name={icon} />
      </span>
      <h3 className="text-xl font-bold text-sanctuary-blue">{title}</h3>
      <p className="mt-2 flex-1 leading-relaxed">{children}</p>
      <a
        href={href}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        className="mt-4 inline-flex items-center gap-1 font-semibold text-ember-crimson after:absolute after:inset-0 after:rounded-2xl"
      >
        {action}
        <Icon name={external ? "external" : "arrowRight"} className="h-4 w-4" />
        {external && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    </Card>
  );
}
