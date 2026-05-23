import SEO from '../components/SEO';
import { faqs } from '../data/fallbackContent';
export default function FAQ(){return <><SEO title="FAQ" /><section className="mx-auto max-w-4xl px-4 py-16"><h1 className="text-5xl font-black text-navy">Frequently asked questions</h1><div className="mt-8 grid gap-4">{faqs.map(f=><article key={f.q} className="rounded-2xl bg-white p-6 shadow-sm"><h2 className="font-bold text-navy">{f.q}</h2><p className="mt-2 text-slate-600">{f.a}</p></article>)}</div></section></>}
