export default function FooterColumn({
  title,
  links,
}) {
  return (
    <div>

      <h3
        className="
        mb-5
        text-lg
        font-bold
        text-white
        "
      >
        {title}
      </h3>


      <ul
        className="
        space-y-3
        text-gray-300
        "
      >

        {links.map((link) => (
          <li key={link}>
            {link}
          </li>
        ))}

      </ul>

    </div>
  );
}