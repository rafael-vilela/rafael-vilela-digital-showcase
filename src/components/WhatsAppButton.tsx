
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5512982127115"
        target="_blank"
        rel="noopener noreferrer"
        className="block p-3 bg-gray-800/70 hover:bg-primary transition-colors duration-300 rounded-full shadow-lg border border-gray-600/30 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
