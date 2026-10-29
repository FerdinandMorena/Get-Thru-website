import EnquiryForm from "../../components/site/EnquiryForm";
import PageHero from "../../components/site/PageHero";
import { provinces } from "../../components/site/constants";

const fields = [
  { label: "Full name", name: "name", required: true },
  { label: "Phone / WhatsApp", name: "phone", required: true },
  { label: "Email (optional)", name: "email", type: "email" },
  {
    label: "Service type",
    name: "service",
    options: ["Home internet", "Business internet", "Community / public Wi-Fi"],
    required: true,
  },
  {
    label: "Province",
    name: "province",
    options: provinces,
    required: true,
    full: true,
  },
  {
    label: "Town, suburb, street / nearest landmark",
    name: "location",
    required: true,
    full: true,
  },
  {
    label: "Additional details",
    name: "message",
    type: "textarea",
    full: true,
  },
];

export default function CoveragePage() {
  return (
    <>
      <PageHero
        crumb="Home / Coverage & availability"
        description="Coverage depends on location and network feasibility. Share your address and preferred service so our team can assess availability and follow up."
        eyebrow="Check before you order"
        title={
          <>
            Is Get Thru available
            <br />
            <em className="not-italic text-blue-700">in your area?</em>
          </>
        }
      />
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-5 sm:px-7 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What happens next?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Submit your details and service address. Get Thru reviews the
              location and contacts you with the next step or any additional
              information needed.
            </p>
          </div>
          <EnquiryForm
            button="Submit coverage enquiry"
            fields={fields}
            name="Coverage check"
            title="Check my location"
          />
        </div>
      </section>
    </>
  );
}
