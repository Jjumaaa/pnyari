import Reveal from "@/components/ui/Reveal";


export default function AboutCard({
 icon,
 title,
 description
}) {

return (

<Reveal>

<div
className="
rounded-2xl
bg-white
p-8
shadow-sm
transition
duration-300
hover:-translate-y-2
hover:shadow-xl
"
>

<div className="
mb-5
text-4xl
text-[var(--color-brushed-gold)]
">
{icon}
</div>


<h3 className="
mb-3
text-2xl
font-bold
text-[var(--color-sanctuary-blue)]
">
{title}
</h3>


<p className="
text-[var(--color-charcoal-slate)]
">
{description}
</p>


</div>

</Reveal>

);

}