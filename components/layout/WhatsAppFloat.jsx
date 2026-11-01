import Icon from "@/components/ui/Icon";
import { whatsappLink } from "@/data/church";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with PCEA Nyari Church on WhatsApp (opens in a new tab)"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1DA851] text-white shadow-xl shadow-black/20 transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
    >
      <Icon name="whatsapp" className="h-8 w-8" />
    </a>
  );
}
