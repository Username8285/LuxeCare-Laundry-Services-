export default function PriceCard({ item, price }) {
  return <div className="flex items-center justify-between rounded-2xl border border-skysoft bg-white p-5 shadow-sm"><span className="font-semibold text-navy">{item}</span><span className="rounded-full bg-skysoft px-4 py-2 font-bold text-navy">{price}</span></div>;
}
