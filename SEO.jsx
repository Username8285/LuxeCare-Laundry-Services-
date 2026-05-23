import { Helmet } from 'react-helmet-async';
import { site } from '../data/fallbackContent';

export default function SEO({ title, description }) {
  const pageTitle = title ? `${title} | ${site.businessName}` : site.businessName;
  const metaDescription = description || `${site.businessName} offers laundry, dry cleaning, ironing, pickup and delivery in Lagos.`;
  return <Helmet><title>{pageTitle}</title><meta name="description" content={metaDescription} /><meta property="og:title" content={pageTitle} /><meta property="og:description" content={metaDescription} /><meta property="og:type" content="website" /></Helmet>;
}
