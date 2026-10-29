export default function ContentCard({ icon, accent = false, children, className = "" }) {
  return (
    <article
      className={`site-card flex min-w-0 flex-col rounded-2xl p-6 ${className}`}
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
