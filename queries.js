export const siteSettingsQuery = `*[_type == "siteSettings"][0]`;
export const servicesQuery = `*[_type == "service" && featured == true] | order(order asc)`;
export const priceItemsQuery = `*[_type == "priceItem" && active == true] | order(displayOrder asc)`;
export const faqsQuery = `*[_type == "faq"] | order(displayOrder asc)`;
export const testimonialsQuery = `*[_type == "testimonial" && approved == true] | order(_createdAt desc)`;
