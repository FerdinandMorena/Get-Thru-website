import ButtonLink from "../../components/site/ButtonLink";
import ContentCard from "../../components/site/ContentCard";
import EnquiryForm from "../../components/site/EnquiryForm";
import PageHero from "../../components/site/PageHero";
import { pagePath, provinces } from "../../components/site/constants";

const businessServices = [
  [
    "⌁",
    "Business internet",
    "Explore connectivity for offices, shops, home-based businesses and community organisations, subject to coverage.",
    "Enquire →",
    "business-form",
  ],
  [
    "▦",
    "Digital tools & support",
    "Discuss digital needs, online presence, productivity and practical technology requirements.",
    "Discuss needs →",
    "business-form",
  ],
  [
    "↗",
    "Enterprise enablement",
    "Explore digital skills and enterprise pathways that support participation in the digital economy.",
    "Earn & Grow →",
    "learn-grow",
  ],
];

const fields = [
  { label: "Full name", name: "name", required: true },
  { label: "Business name", name: "business", required: true },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Phone / WhatsApp", name: "phone", required: true },
  { label: "Province", name: "province", options: provinces, required: true },
  {
    label: "Service needed",
    name: "service",
    options: [
      "Business internet",
      "Digital tools and support",
      "Enterprise enablement",
      "Other / not sure",
    ],
    required: true,
  },
  {
    label: "Town / suburb / service location",
    name: "location",
    required: true,
    full: true,
  },
  {
    label: "More about your needs",
    name: "message",
    type: "textarea",
    full: true,
  },
];

export default function BusinessPage({ navigate }) {
  return (
    <>
      <PageHero
        actions={[
          ["business-form", "Make a business enquiry ↗", "primary"],
          ["contact", "Talk to our team", "outline"],
        ]}
        crumb="Home / Business solutions"
        description="Tell us what your business needs. Enquire about connectivity and explore technology-enabled business solutions."
        eyebrow="Connect your business"
        navigate={navigate}
        visual="business"
        title={<>Connectivity and digital tools<br /><em className="not-italic text-blue-700">for business growth.</em></>}
      />
      <section className="site-grid-bg py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-5 px-5 sm:px-7 md:grid-cols-3 lg:px-8">
          {businessServices.map(([icon, title, copy, link, to], index) => (
            <ContentCard accent={index % 2 === 1} icon={icon} key={title}>
              <h2 className="mb-2 text-xl font-extrabold text-slate-900">{title}</h2>
              <p className="mb-4 text-sm leading-6 text-slate-600">{copy}</p>
              <a
                className="mt-auto text-sm font-extrabold text-blue-700 hover:underline"
                href={pagePath(to)}
                onClick={(event) => navigate(event, to)}
              >
                {link}
              </a>
            </ContentCard>
          ))}
        </div>
      </section>
      <section
        className="site-grid-bg scroll-mt-24 py-14 sm:py-16 lg:py-20"
        id="business-form"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-5 sm:px-7 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Tell us what would help your business move forward.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Share your contact details, location and service needs. Our team
              will review your enquiry and follow up.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              This is an enquiry, not a confirmed order or service commitment.
            </p>
          </div>
          <EnquiryForm
            button="Submit business enquiry"
            fields={fields}
            name="Business enquiry"
            title="Business enquiry"
          />
        </div>
      </section>
    </>
  );
}
