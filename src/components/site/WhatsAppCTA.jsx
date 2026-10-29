import { whatsappHref } from "./constants";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppCTA() {
  return (
    <a
      aria-label="Chat with Get Thru on WhatsApp"
      className="fixed bottom-4 right-4 z-20 inline-flex items-center gap-2 rounded-full bg-[#128c55] px-4 py-3 text-sm font-extrabold text-white shadow-xl shadow-emerald-950/25 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-800 sm:bottom-5 sm:right-5"
      href={whatsappHref}
      rel="noreferrer"
      target="_blank"
    >
      <FaWhatsapp className="text-xl font-bold" /> WhatsApp us
    </a>
  );
}
