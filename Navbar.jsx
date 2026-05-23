import { NavLink } from 'react-router-dom';
import { site } from '../data/fallbackContent';

const links = ['Services', 'Pricing', 'About', 'Booking', 'Contact', 'FAQ'];

export default function Navbar() {
  return <header className="sticky top-0 z-50 border-b border-skysoft bg-white/90 backdrop-blur"><nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4"><NavLink to="/" className="text-xl font-black text-navy">{site.businessName}</NavLink><div className="hidden gap-5 md:flex">{links.map((link) => <NavLink key={link} to={`/${link.toLowerCase()}`} className={({ isActive }) => `text-sm font-semibold ${isActive ? 'text-teal' : 'text-navy'}`}>{link}</NavLink>)}</div><NavLink to="/booking" className="rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white">Book</NavLink></nav></header>;
}
