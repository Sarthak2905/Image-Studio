import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../utils/constants';

const WhatsAppFloat = () => {
  if (!WHATSAPP_NUMBER) return null;

  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Image%20Studio%2C%20I%20want%20to%20book%20a%20wedding%20shoot.`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 bg-luxury-gold text-black rounded-full p-4 shadow-luxury hover:scale-105 transition"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
};

export default WhatsAppFloat;
