import SEO from '../components/SEO';
import BookingForm from '../components/BookingForm';
import WhatsAppButton from '../components/WhatsAppButton';
export default function Booking(){return <><SEO title="Booking" description="Book laundry pickup with LuxeCare Services by WhatsApp or pickup request form." /><section className="bg-skysoft px-4 py-16"><div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2"><div><h1 className="text-5xl font-black text-navy">Book a pickup</h1><p className="mt-4 text-slate-700">Start on WhatsApp or send a structured pickup request. We will contact you to confirm availability and details.</p><div className="mt-8"><WhatsAppButton /></div></div><BookingForm /></div></section></>}
