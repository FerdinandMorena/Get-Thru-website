import { pagePath } from "./constants";

export default function ButtonLink({
  to,
  children,
  navigate,
  variant = "outline",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg shadow-blue-900/15 hover:shadow-xl",
    blue: "bg-gradient-to-r from-blue-600 to-emerald-600 text-white shadow-lg shadow-blue-900/15 hover:shadow-xl",
    outline:
      "border border-emerald-700 bg-white text-emerald-800 hover:bg-emerald-50",
    glass:
      "border border-white/50 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
  };

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-2.5 text-center text-sm font-bold leading-snug transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${variants[variant]} ${className}`}
      href={pagePath(to)}
      onClick={(event) => {
        event.preventDefault();
        navigate?.(event, to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
