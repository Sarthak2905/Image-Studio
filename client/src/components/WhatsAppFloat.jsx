import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-5 right-5 bg-luxury-gold text-black rounded-full p-4 shadow-luxury hover:scale-105 transition"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={22} />
  </a>
);

export default WhatsAppFloat;
