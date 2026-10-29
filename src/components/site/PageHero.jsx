import ButtonLink from "./ButtonLink";
import Eyebrow from "./Eyebrow";

export default function PageHero({
  crumb,
  eyebrow,
  title,
  description,
  actions = [],
  navigate,
}) {
  const breadcrumb = crumb.split("/ ").slice(1).join("/ ") || crumb;

  return (
    <section className="bg-gradient-to-br from-emerald-50 via-blue-50 to-slate-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8">
        <p className="mb-5 text-xs font-medium text-slate-600 sm:text-sm">
          Home / {breadcrumb}
        </p>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">
          {description}
        </p>
        {actions.length > 0 && (
          <div className="mt-7 flex flex-wrap gap-3">
            {actions.map(([to, label, variant = "outline"]) => (
              <ButtonLink
                key={label}
                to={to}
                variant={variant === "primary" ? "primary" : "outline"}
                navigate={navigate}
              >
                {label}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
