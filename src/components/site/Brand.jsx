import { pagePath } from "./constants";

export default function Brand({ onClick, inverse = false }) {
  return (
    <a
      className={`flex shrink-0 items-center gap-2.5 text-xl font-extrabold leading-none sm:text-2xl ${
        inverse ? "text-white" : "text-slate-800"
      }`}
      href={pagePath("home")}
      onClick={onClick}
      aria-label="Get Thru home"
    >
      <img className="h-10 w-auto object-contain sm:h-12" src="/logo.jpg" alt="" />
      <span
        className={
          inverse
            ? "text-white"
            : "bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"
        }
      >
        GetThru
      </span>
    </a>
  );
}
