export const navigation = [
  ["home", "Home"],
  ["connect", "Connect"],
  ["business", "Business"],
  ["learn-grow", "Learn & Grow"],
  ["contact", "Contact"],
];

export function pagePath(page) {
  if (page === "business-form") return "/business";
  if (page === "learning-form") return "/learn-grow";
  return page === "home" ? "/" : `/${page}`;
}

export const provinces = [
  "Gauteng",
  "Mpumalanga",
  "Limpopo",
  "KwaZulu-Natal",
  "Eastern Cape",
  "Western Cape",
  "Free State",
  "North West",
  "Northern Cape",
];

export const packages = [
  ["Basic", "R430/month — 10/5 Mbps"],
  ["Standard", "R550/month — 20/10 Mbps"],
  ["Premium", "R720/month — 40/20 Mbps"],
  ["Ultimate", "R890+/month — 50+ Mbps"],
];

export const whatsappHref =
  "https://wa.me/27706528395?text=Hi%20Get%20Thru%2C%20I%27d%20like%20to%20make%20an%20enquiry.";
