import { site } from '../data/fallbackContent';

export default function WhatsAppButton({ label = 'Book Pickup on WhatsApp' }) {
  const message = encodeURIComponent('Hello LuxeCare Services, I would like to book a laundry pickup.');
  return <a href={`https://wa.me/${site.whatsapp}?text=${message}`} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-teal px-6 py-3 font-semibold text-white shadow-md transition hover:opacity-90">{label}</a>;
}
