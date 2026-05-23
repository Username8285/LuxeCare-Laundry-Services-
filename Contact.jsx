import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { site } from '../data/fallbackContent';
export default function Contact(){return <><SEO title="Contact" /><section className="mx-auto max-w-4xl px-4 py-16"><h1 className="text-5xl font-black text-navy">Contact</h1><div className="mt-8 grid gap-4 text-lg"><p><strong>Phone/WhatsApp:</strong> {site.phone}</p><p><strong>Location:</strong> {site.location}</p><p><strong>Social:</strong> {site.social}</p><p><strong>Domain:</strong> {site.domain}</p></div><div className="mt-8"><WhatsAppButton /></div></section></>}
