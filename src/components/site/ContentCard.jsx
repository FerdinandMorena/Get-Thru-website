export default function ContentCard({ icon, accent = false, children, className = "" }) {
  return (
    <article
      className={`flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_28px_rgba(16,42,67,0.06)] transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_36px_rgba(16,42,67,0.10)] ${className}`}
    >
      <div
        aria-hidden="true"
        className={`mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-xl font-extrabold text-white ${
          accent ? "from-blue-600 to-teal-700" : "from-emerald-600 to-blue-600"
        }`}
      >
        {icon}
      </div>
      {children}
    </article>
  );
}
