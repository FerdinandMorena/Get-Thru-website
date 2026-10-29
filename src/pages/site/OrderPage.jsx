import EnquiryForm from "../../components/site/EnquiryForm";
import PageHero from "../../components/site/PageHero";
import { packages, provinces } from "../../components/site/constants";

const fields = [
  { label: "Full name", name: "name", required: true },
  { label: "Phone / WhatsApp", name: "phone", required: true },
  { label: "Email", name: "email", type: "email", required: true },
  {
    label: "Package",
    name: "package",
    options: [...packages.map(([name, description]) => `${name} — ${description}`), "Help me choose"],
    required: true,
    placeholder: "Select package",
  },
  { label: "Province", name: "province", options: provinces, required: true },
  { label: "Town / suburb", name: "suburb", required: true },
  { label: "Street address / nearest landmark", name: "address", required: true, full: true },
  {
    label: "Property type",
    name: "property",
    options: ["House", "Apartment / complex", "Business premises", "Other"],
    required: true,
  },
  {
    label: "Preferred contact method",
    name: "contact",
    options: ["WhatsApp", "Phone call", "Email"],
    required: true,
  },
  { label: "Additional notes", name: "message", type: "textarea", full: true },
];

export default function OrderPage({ selectedPackage }) {
  const packageName = selectedPackage
    ? `${selectedPackage} — ${packages.find(([name]) => name === selectedPackage)?.[1]}`
    : "";
  const orderFields = fields.map((field) =>
    field.name === "package" ? { ...field, defaultValue: packageName } : field,
  );

  return (
    <>
      <PageHero
        crumb="Home / Order internet"
        description="Tell us which package you are interested in and where service is needed. The order is not confirmed until Get Thru verifies coverage and confirms terms."
        eyebrow="Start your order"
        title={<>One step closer to<br /><em className="not-italic text-blue-700">getting connected.</em></>}
      />
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-8 px-5 sm:px-7 lg:grid-cols-[.85fr_1.15fr] lg:gap-14 lg:px-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Order / installation enquiry
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our team will follow up to verify your address, availability,
              package and installation arrangements.
            </p>
          </div>
          <EnquiryForm
            button="Submit order enquiry"
            fields={orderFields}
            name="Internet order enquiry"
            title="Your details"
          />
        </div>
      </section>
    </>
  );
}
