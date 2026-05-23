import { site } from '../data/fallbackContent';

export default function Footer() {
  return <footer className="bg-navy px-4 py-10 text-white"><div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3"><div><p className="text-lg font-black">{site.businessName}</p><p className="text-sm text-white/75">{site.tagline}</p></div><div><p>{site.location}</p><p>{site.phone}</p></div><div><p>{site.social}</p><p className="text-sm text-white/75">Payment on delivery at launch.</p></div></div></footer>;
}
