import { useState } from "react";
import FormField from "./FormField";

const consentCopy = {
  "Digital skills interest":
    "I agree that Get Thru may contact me about learning opportunities.",
  "Coverage check":
    "I agree that Get Thru may contact me about this coverage enquiry.",
  "Internet order enquiry":
    "I agree that Get Thru may contact me to process this enquiry.",
  "General contact":
    "I agree that Get Thru may contact me about this message.",
};

export default function EnquiryForm({ title, name, fields, button }) {
  const [submitError, setSubmitError] = useState(false);

  function submit(event) {
    event.preventDefault();
    setSubmitError(true);
  }

  return (
    <form
      className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_16px_42px_rgba(16,42,67,0.08)] sm:p-7 lg:p-8"
      data-name={name}
      onSubmit={submit}
    >
      <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
        {fields.map((field) => (
          <FormField key={field.name} {...field} />
        ))}
        <div className="sm:col-span-2">
          <label className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
            <input
              className="mt-1 h-4 w-4 shrink-0 accent-emerald-700"
              name="consent"
              type="checkbox"
              required
            />
            <span>
              {consentCopy[name] ||
                "I agree that Get Thru may contact me about this enquiry."}
            </span>
          </label>
        </div>
        <div className="sm:col-span-2">
          <button
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-emerald-700 to-blue-700 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            type="submit"
          >
            {button} ↗
          </button>
          {submitError && (
            <div
              className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-semibold leading-6 text-red-900"
              role="alert"
            >
              We couldn’t send your enquiry. Please contact us on WhatsApp at
              {" "}070 652 8395 or email info@getthru.co.za.
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
