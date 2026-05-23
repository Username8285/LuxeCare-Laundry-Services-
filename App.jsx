import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

const router = createBrowserRouter([{ path: '/', element: <MainLayout />, children: [
  { index: true, element: <Home /> },
  { path: 'services', element: <Services /> },
  { path: 'pricing', element: <Pricing /> },
  { path: 'about', element: <About /> },
  { path: 'booking', element: <Booking /> },
  { path: 'contact', element: <Contact /> },
  { path: 'faq', element: <FAQ /> },
] }]);

export default function App(){ return <RouterProvider router={router} />; }
