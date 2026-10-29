import ButtonLink from "../../components/site/ButtonLink";
import ContentCard from "../../components/site/ContentCard";
import PageHero from "../../components/site/PageHero";
import { pagePath } from "../../components/site/constants";

const offers = [
  {
    label: "Everyday use",
    name: "Basic",
    price: "R430",
    speed: "10/5 Mbps",
    details: [
      "Browsing and messaging",
      "Essential online tasks",
      "Unlimited data as advertised",
    ],
  },
  {
    label: "Popular choice",
    name: "Standard",
    price: "R550",
    speed: "20/10 Mbps",
    details: [
      "Study, work and streaming",
      "Regular household use",
      "Unlimited data as advertised",
    ],
    featured: true,
  },
  {
    label: "More speed",
    name: "Premium",
    price: "R720",
    speed: "40/20 Mbps",
    details: [
      "Busy households",
      "More connected devices",
      "Unlimited data as advertised",
    ],
  },
  {
    label: "Higher tier",
    name: "Ultimate",
    price: "R890+",
    speed: "50+ Mbps",
    details: [
      "Higher-speed usage needs",
      "Demanding online activities",
      "Unlimited data as advertised",
    ],
  },
];

const communityServices = [
  [
    "⌁",
    "Community connectivity",
    "Explore public Wi-Fi, hotspot access and connectivity options designed to help underserved communities get online.",
    "Ask about community access →",
    "contact",
  ],
  [
    "⌂",
    "Smart community hubs",
    "Enquire about community-based access points that can support digital learning, information access and local services.",
    "Discuss a community hub →",
    "contact",
  ],
  [
    "▤",
    "Digital skills and inclusion",
    "Connect residents to practical digital skills pathways that support confident, safer participation online.",
    "Explore learning →",
    "learn-grow",
  ],
  [
    "◎",
    "Local enterprise enablement",
    "Explore digital tools and support for small businesses, cooperatives and community entrepreneurs.",
    "Business solutions →",
    "business",
  ],
  [
    "▦",
    "Digital community services",
    "Discuss digital platforms that may help communities access information, engage with services and improve communication.",
    "Make an enquiry →",
    "contact",
  ],
  [
    "↗",
    "Partnerships and deployment",
    "Municipalities, community organisations and implementation partners can contact us to discuss a potential collaboration.",
    "Explore partnership →",
    "contact",
  ],
];

export default function ConnectPage({ navigate, onSelectPackage }) {
  return (
    <>
      <PageHero
        actions={[
          ["coverage", "Check availability ↗", "primary"],
          ["order", "Start an order", "outline"],
        ]}
        crumb="Home / Connect"
        description="Compare the currently advertised packages, then check coverage before placing an order. Availability and final installation arrangements are confirmed by our team."
        eyebrow="01 · Connect"
        navigate={navigate}
        visual="connect"
        title={
          <>
            Home internet that helps
            <br />
            <em className="not-italic text-blue-700">you do more online.</em>
          </>
        }
      />
      <section className="site-grid-bg py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Choose your package
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Package details below reflect the current marketing offer.
              Availability, speeds and installation arrangements must be
              confirmed for your address.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {offers.map((offer) => (
              <article
                className={`site-card relative flex flex-col rounded-2xl p-6 ${
                  offer.featured
                    ? "site-card-featured shadow-lg shadow-emerald-900/10"
                    : ""
                }`}
                key={offer.name}
              >
                {offer.featured && (
                  <span className="absolute right-4 top-4 rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-emerald-900">
                    RECOMMENDED
                  </span>
                )}
                <span className="mb-3 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-900">
                  {offer.label}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">
                  {offer.name}
                </h3>
                <div className="mt-3 text-3xl font-extrabold text-slate-900">
                  {offer.price}{" "}
                  <span className="text-xs font-semibold text-slate-600">
                    / month
                  </span>
                </div>
                <div className="mt-1 text-base font-extrabold text-blue-700">
                  {offer.speed}
                </div>
                <ul className="my-5 flex-1 space-y-2 border-t border-slate-100 pt-4 text-sm leading-6 text-slate-600">
                  {offer.details.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <ButtonLink
                  className="w-full"
                  navigate={(event, id) => {
                    if (id === "order") onSelectPackage(offer.name);
                    navigate(event, id);
                  }}
                  to="order"
                  variant={offer.featured ? "primary" : "outline"}
                >
                  {offer.name === "Ultimate"
                    ? "Enquire"
                    : `Choose ${offer.name}`}
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="site-grid-bg py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <div className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
              Beyond connectivity
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Connecting communities to opportunity
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Get Thru, powered by Technorain Solutions, supports a broader
              Smart Community Development approach: combining digital access,
              skills, community services and local economic participation.
              Specific deployments depend on partners, funding and local
              implementation plans.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {communityServices.map(([icon, title, copy, link, to], index) => (
              <ContentCard accent={index % 2 === 1} icon={icon} key={title}>
                <h3 className="mb-2 text-lg font-extrabold text-slate-900">
                  {title}
                </h3>
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
          <p className="mt-6 rounded-r-xl border border-emerald-200 border-l-4 border-l-emerald-700 bg-white p-4 text-sm leading-6 text-slate-700">
            Smart Community Development initiatives are developed with relevant
            stakeholders. The website does not imply that every service or
            facility is already available in every community.
          </p>
        </div>
      </section>
    </>
  );
}
