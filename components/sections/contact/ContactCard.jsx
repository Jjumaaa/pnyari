import Card from "@/components/ui/Card";

export default function ContactCard({
  icon,
  title,
  children,
}) {
  return (
    <Card
      className="
      text-center
      "
    >

      <div
        className="
        mx-auto
        mb-5
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[var(--color-sanctuary-blue)]
        text-2xl
        text-white
        "
      >
        {icon}
      </div>


      <h3
        className="
        text-xl
        font-bold
        text-[var(--color-sanctuary-blue)]
        "
      >
        {title}
      </h3>


      <p
        className="
        mt-3
        text-[var(--color-charcoal-slate)]
        "
      >
        {children}
      </p>

    </Card>
  );
}