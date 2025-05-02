
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5512982127115"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-gray-700/60 hover:bg-gray-600/80 transition-colors duration-300 rounded-full shadow-lg border border-gray-500/30 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white/90 group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
