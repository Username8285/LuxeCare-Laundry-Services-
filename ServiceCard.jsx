export default function ServiceCard({ title, description }) {
  return <article className="rounded-3xl border border-skysoft bg-white p-6 shadow-sm"><div className="mb-4 h-12 w-12 rounded-2xl bg-skysoft" /><h3 className="text-xl font-bold text-navy">{title}</h3><p className="mt-2 text-slate-600">{description}</p></article>;
}
