export default function BookingForm() {
  return <form name="pickup-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="grid gap-4 rounded-3xl bg-white p-6 shadow-lg">
    <input type="hidden" name="form-name" value="pickup-request" /><p className="hidden"><label>Do not fill this out: <input name="bot-field" /></label></p>
    <input required name="fullName" placeholder="Full name" className="rounded-xl border p-3" />
    <input required name="phone" placeholder="Phone number" className="rounded-xl border p-3" />
    <input name="whatsapp" placeholder="WhatsApp number, if different" className="rounded-xl border p-3" />
    <input required name="address" placeholder="Pickup address" className="rounded-xl border p-3" />
    <input required name="area" placeholder="Area in Lagos" className="rounded-xl border p-3" />
    <input required name="pickupTime" placeholder="Preferred pickup date and time" className="rounded-xl border p-3" />
    <select required name="serviceType" className="rounded-xl border p-3"><option value="">Service type</option><option>Wash & Fold</option><option>Dry Cleaning</option><option>Ironing</option><option>Pickup & Delivery</option><option>Comforter Cleaning</option></select>
    <select required name="deliveryPreference" className="rounded-xl border p-3"><option value="">Delivery preference</option><option>Pickup only</option><option>Pickup and delivery</option></select>
    <textarea name="instructions" placeholder="Special instructions" className="rounded-xl border p-3" rows="4" />
    <label className="flex gap-2 text-sm"><input required type="checkbox" name="consent" /> I consent to be contacted by phone or WhatsApp about my pickup request.</label>
    <button className="rounded-full bg-teal px-6 py-3 font-bold text-white" type="submit">Submit pickup request</button>
  </form>;
}
