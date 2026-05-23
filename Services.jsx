import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { services } from '../data/fallbackContent';
export default function Services(){return <><SEO title="Services" description="Wash and fold, dry cleaning, ironing, pickup and delivery, and comforter cleaning in Lagos." /><section className="mx-auto max-w-6xl px-4 py-16"><h1 className="text-5xl font-black text-navy">Laundry services</h1><p className="mt-4 max-w-2xl text-slate-600">Clean, premium, practical garment care for customers in Lagos.</p><div className="mt-8 grid gap-5 md:grid-cols-3">{services.map((s)=><ServiceCard key={s.title} {...s}/>)}</div><div className="mt-10"><WhatsAppButton /></div></section></>}
