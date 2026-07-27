import FooterColumn from "./FooterColumn";
import { footerLinks } from "@/data/footer";


export default function Footer() {
  return (
    <footer
      className="
      bg-[var(--color-sanctuary-blue)]
      text-white
      "
    >

      <div
        className="
        mx-auto
        grid
        max-w-7xl
        gap-10
        px-6
        py-16
        md:grid-cols-4
        "
      >


        <div>

          <h2
            className="
            text-2xl
            font-bold
            "
          >
            PCEA NYARI CHURCH
          </h2>


          <p
            className="
            mt-4
            leading-relaxed
            text-gray-300
            "
          >
            A Christ-centered church where everyone is welcomed,
            loved, and shepherded.
          </p>

        </div>



        {footerLinks.map((section) => (
          <FooterColumn
            key={section.title}
            title={section.title}
            links={section.links}
          />
        ))}


      </div>


      <div
        className="
        border-t
        border-white/20
        py-6
        text-center
        text-sm
        text-gray-300
        "
      >
        © 2026 PCEA Nyari Church. All rights reserved.
      </div>


    </footer>
  );
}