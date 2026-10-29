import ContentCard from "../../components/site/ContentCard";
import EnquiryForm from "../../components/site/EnquiryForm";
import PageHero from "../../components/site/PageHero";
import { pagePath } from "../../components/site/constants";
import ButtonLink from "../../components/site/ButtonLink";
import { provinces } from "../../components/site/constants";

const learningPaths = [
  ["⌨", "Basic digital & computer skills", "Devices, internet use, online safety, files and everyday digital tasks."],
  ["▤", "Workplace & productivity", "Digital tools for communication, documents and collaboration."],
  ["✦", "AI & digital tools", "Practical AI concepts, responsible use and digital assistance."],
  ["⌘", "ICT foundations", "Introductory computer, connectivity and information technology concepts."],
  ["↗", "Digital entrepreneurship", "Digital channels and tools to support business ideas."],
  ["▥", "Coding, data & career readiness", "Introductory coding/data concepts and preparation for career pathways."],
  ["⌘", "Cybersecurity & online safety", "Passwords, privacy, scams, device safety and responsible online behaviour."],
  ["▤", "Microsoft 365 & collaboration", "Practical use of documents, spreadsheets, presentations, email and online collaboration tools."],
  ["☁", "Cloud & digital platforms", "Introduction to cloud concepts, digital services and working with online platforms."],
  ["▥", "Data literacy & analytics", "Understand data, work with spreadsheets and explore introductory data analysis."],
  ["✦", "Generative AI skills", "Explore AI tools, effective prompting, practical use cases and responsible AI practices."],
  ["⌨", "Web development & coding", "Build foundational logic and explore websites, programming and digital product concepts."],
  ["↗", "Digital marketing & e-commerce", "Learn about social media, online customer journeys, content and digital sales channels."],
  ["◎", "Career readiness & freelancing", "Build digital CVs, online professional profiles, communication skills and work readiness."],
];

const learningFields = [
  { label: "Full name", name: "name", required: true },
  { label: "Mobile / WhatsApp", name: "phone", required: true },
  { label: "Email (optional)", name: "email", type: "email" },
  {
    label: "Age group",
    name: "age",
    options: ["Under 18", "18–24", "25–34", "35–44", "45+"],
    required: true,
  },
  { label: "Province", name: "province", options: provinces, required: true },
  {
    label: "Learning interest",
    name: "course",
    options: [
      "Basic digital skills",
      "Workplace productivity",
      "AI & digital tools",
      "ICT foundations",
      "Digital entrepreneurship",
      "Coding & data",
      "Career readiness",
      "Not sure",
    ],
    required: true,
  },
  { label: "Town / community", name: "location", required: true, full: true },
];

const growthPaths = [
  ["↗", "Digital entrepreneurship", "Use online tools, digital communication and customer channels to support a business idea."],
  ["▦", "Business digitalisation", "Explore digital tools that may help small businesses reach customers and work effectively."],
  ["◎", "Community opportunities", "Ask about initiatives focused on digital participation, practical skills and enterprise enablement."],
];

export default function LearnPage({ navigate }) {
  const introPaths = learningPaths.slice(0, 6);
  const morePaths = learningPaths.slice(6);

  return (
    <>
      <PageHero
        actions={[["learning-form", "Register interest ↗", "primary"]]}
        crumb="Home / Learn & Grow"
        description="Digital skills can help people use technology confidently, access information and prepare for new opportunities. Register interest to hear about future intakes."
        eyebrow="02 · Learn"
        navigate={navigate}
        title={<>Build skills.<br /><em className="not-italic text-blue-700">Grow your future.</em></>}
      />
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Learning pathways
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Course availability, entry requirements, delivery method,
              duration and certification depend on each intake and will be
              confirmed before registration.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {introPaths.map(([icon, title, copy], index) => (
              <ContentCard accent={index % 2 === 1} icon={icon} key={title}>
                <h3 className="mb-2 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{copy}</p>
              </ContentCard>
            ))}
          </div>
          <p className="mt-6 rounded-r-xl border border-emerald-200 border-l-4 border-l-emerald-700 bg-emerald-50/70 p-4 text-sm leading-6 text-slate-700">
            Interest registration does not guarantee admission, a funded
            place, certification or immediate course access.
          </p>

          <div className="mb-8 mt-14 max-w-3xl">
            <div className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
              More learning pathways
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Explore more digital courses
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Course availability, duration, entry requirements, delivery
              method and any certification will be confirmed for each intake.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {morePaths.map(([icon, title, copy], index) => (
              <ContentCard accent={index % 2 === 1} icon={icon} key={title}>
                <h3 className="mb-2 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="text-sm leading-6 text-slate-600">{copy}</p>
              </ContentCard>
            ))}
          </div>
          <p className="mt-6 rounded-r-xl border border-emerald-200 border-l-4 border-l-emerald-700 bg-emerald-50/70 p-4 text-sm leading-6 text-slate-700">
            Registering interest is not a guarantee of admission, funding,
            employment, certification or immediate course access. Training
            opportunities will be communicated when confirmed.
          </p>
        </div>
      </section>
      <section
        className="scroll-mt-24 bg-gradient-to-br from-slate-50 to-blue-50/60 py-14 sm:py-16 lg:py-20"
        id="learning-form"
      >
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-5 sm:px-7 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Be first to hear when registrations open.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Tell us what you want to learn and where you are based so we can
              follow up about relevant opportunities.
            </p>
          </div>
          <EnquiryForm
            button="Register my interest"
            fields={learningFields}
            name="Digital skills interest"
            title="Learning interest form"
          />
        </div>
      </section>
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8">
          <div className="mb-8 max-w-3xl">
            <div className="text-xs font-extrabold uppercase tracking-widest text-blue-700">
              Earn &amp; grow
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Turn digital capability into new possibilities
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Connect skills with practical use through digital
              entrepreneurship, business enablement and opportunities to
              participate in the digital economy.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {growthPaths.map(([icon, title, copy], index) => (
              <ContentCard accent={index % 2 === 1} icon={icon} key={title}>
                <h3 className="mb-2 text-lg font-extrabold text-slate-900">{title}</h3>
                <p className="mb-4 text-sm leading-6 text-slate-600">{copy}</p>
                {title === "Community opportunities" && (
                  <a
                    className="mt-auto text-sm font-extrabold text-blue-700 hover:underline"
                    href={pagePath("contact")}
                    onClick={(event) => navigate(event, "contact")}
                  >
                    Discuss an opportunity →
                  </a>
                )}
              </ContentCard>
            ))}
          </div>
          <p className="mt-6 rounded-r-xl border border-emerald-200 border-l-4 border-l-emerald-700 bg-emerald-50/70 p-4 text-sm leading-6 text-slate-700">
            Get Thru does not guarantee employment, income, grants or business
            outcomes. Specific opportunities are shared only when confirmed.
          </p>
          <ButtonLink className="mt-6" navigate={navigate} to="contact" variant="blue">
            Ask about opportunities ↗
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
