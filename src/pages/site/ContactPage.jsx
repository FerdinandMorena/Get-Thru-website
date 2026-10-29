import ContentCard from "../../components/site/ContentCard";
import EnquiryForm from "../../components/site/EnquiryForm";
import PageHero from "../../components/site/PageHero";

const faqs = [
  [
    "How do I know if internet is available at my address?",
    "Submit a coverage enquiry. Get Thru must confirm technical availability before an order can be accepted.",
  ],
  [
    "Are packages available everywhere?",
    "Not necessarily. Availability and installation depend on coverage and technical assessment.",
  ],
  [
    "How do I register for digital skills training?",
    "Register your interest to hear about future intakes. Admission and course details are confirmed when a programme opens.",
  ],
  [
    "Can I contact Get Thru on WhatsApp?",
    "Yes. Use the WhatsApp contact shown on this page to start an enquiry.",
  ],
];

const fields = [
  { label: "Full name", name: "name", required: true },
  { label: "Email", name: "email", type: "email", required: true },
  { label: "Phone (optional)", name: "phone" },
  {
    label: "Reason for contact",
    name: "reason",
    options: [
      "Home internet",
      "Business internet",
      "Coverage",
      "Digital skills",
      "Earn & Grow",
      "Technical support",
      "Partnership",
      "Other",
    ],
    required: true,
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    required: true,
    full: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Home / Contact & support"
        description="Contact Get Thru about internet packages, coverage, business solutions, digital skills or general support."
        eyebrow="We're here to help"
        title={
          <>
            How can we help
            <br />
            <em className="not-italic text-blue-700">you get thru?</em>
          </>
        }
      />
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-5 sm:px-7 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-8">
          <div className="grid gap-4">
            <ContentCard icon="◉">
              <h2 className="text-lg font-extrabold text-slate-900">
                WhatsApp / phone
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                <b className="text-slate-900">070 652 8395</b>
                <br />
                Use WhatsApp for enquiries and follow-up.
              </p>
              <a
                className="mt-auto text-sm font-extrabold text-blue-700 hover:underline"
                href="https://wa.me/27706528395"
                rel="noreferrer"
                target="_blank"
              >
                Open WhatsApp →
              </a>
            </ContentCard>
            <ContentCard accent icon="✉">
              <h2 className="text-lg font-extrabold text-slate-900">Email</h2>
              <p className="mt-2 text-sm text-slate-600">info@getthru.co.za</p>
              <a
                className="mt-auto text-sm font-extrabold text-blue-700 hover:underline"
                href="mailto:info@getthru.co.za"
              >
                Send an email →
              </a>
            </ContentCard>
          </div>
          <EnquiryForm
            button="Send message"
            fields={fields}
            name="General contact"
            title="Send us a message"
          />
        </div>
      </section>
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/60 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8">
          <h2 className="mb-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map(([question, answer]) => (
              <details className="group py-5" key={question}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-slate-800 marker:hidden">
                  {question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-lg text-blue-700 shadow-sm transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
