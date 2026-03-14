import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-primary-foreground flex items-center justify-center shadow-elevated transition-transform duration-300 hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
