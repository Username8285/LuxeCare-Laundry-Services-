import SEO from '../components/SEO';
import PriceCard from '../components/PriceCard';
import WhatsAppButton from '../components/WhatsAppButton';
import { prices } from '../data/fallbackContent';
export default function Pricing(){return <><SEO title="Pricing" description="LuxeCare Services laundry price list for Lagos customers." /><section className="mx-auto max-w-4xl px-4 py-16"><h1 className="text-5xl font-black text-navy">Pricing</h1><p className="mt-4 text-slate-600">Simple launch pricing. Payment is made on delivery.</p><div className="mt-8 grid gap-4">{prices.map((p)=><PriceCard key={p.item} {...p}/>)}</div><div className="mt-10"><WhatsAppButton /></div></section></>}
