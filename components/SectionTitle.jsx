export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-10">

      <h2 className="text-3xl font-bold text-sanctuary-blue">
        {title}
      </h2>

      <p className="mt-3 text-charcoal-slate">
        {subtitle}
      </p>

    </div>
  );
}