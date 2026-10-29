import {
  ArrowUpRight,
  BookOpenCheck,
  Briefcase,
  Check,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  Wifi,
} from "lucide-react";
import ButtonLink from "./ButtonLink";
import Eyebrow from "./Eyebrow";

function HeroVisual({ variant = "connect" }) {
  if (variant === "business") {
    return (
      <div aria-hidden="true" className="relative mx-auto w-full max-w-lg py-5">
        <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-gradient-to-br from-emerald-200/70 to-blue-200/70" />
        <div className="relative rounded-[1.75rem] border border-white bg-white/90 p-6 shadow-2xl shadow-blue-950/15 backdrop-blur sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Your digital toolkit</p>
              <h2 className="mt-1 text-xl font-extrabold text-slate-900">Built for the way you work</h2>
            </div>
            <Briefcase className="text-emerald-700" size={28} />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="col-span-2 flex items-center gap-4 rounded-2xl bg-gradient-to-r from-emerald-700 to-blue-700 p-4 text-white">
              <Wifi size={26} />
              <div><p className="text-sm font-extrabold">Stay connected</p><p className="text-xs text-white/80">Internet for your workspace</p></div>
              <ArrowUpRight className="ml-auto" size={20} />
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-emerald-700 shadow-sm"><Check size={18} /></span>
              <p className="mt-3 text-sm font-extrabold text-slate-800">Practical tools</p>
              <p className="mt-1 text-xs text-slate-600">Support for everyday work</p>
            </div>
            <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white text-blue-700 shadow-sm"><ArrowUpRight size={18} /></span>
              <p className="mt-3 text-sm font-extrabold text-slate-800">Room to grow</p>
              <p className="mt-1 text-xs text-slate-600">Digital opportunity</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "learn") {
    return (
      <div aria-hidden="true" className="mx-auto w-full max-w-2xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-blue-950 to-emerald-950 p-6 text-white shadow-2xl shadow-blue-950/20 sm:p-9">
          <div className="site-hero-visual-grid absolute inset-0 opacity-40" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-emerald-300 ring-1 ring-white/15"><BookOpenCheck size={25} /></span>
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-300">A learning journey</p><p className="text-sm text-blue-100">Skills grow with every step.</p></div>
            </div>
            <div className="mt-9 grid grid-cols-3 items-end gap-3">
              {[
                ["Discover", "Explore a new skill", "h-24"],
                ["Practice", "Build confidence", "h-36"],
                ["Progress", "Put skills to work", "h-48"],
              ].map(([label, caption, height], index) => (
                <div className="flex flex-col justify-end" key={label}>
                  <div className={`flex ${height} flex-col justify-between rounded-t-2xl border border-white/15 bg-gradient-to-b from-white/15 to-white/[.04] p-3 sm:p-4`}>
                    <span className="text-xs font-extrabold text-emerald-200">0{index + 1}</span>
                    <div><p className="text-sm font-extrabold sm:text-base">{label}</p><p className="mt-1 text-[10px] leading-4 text-blue-100 sm:text-xs">{caption}</p></div>
                  </div>
                  <div className="h-1 bg-gradient-to-r from-emerald-400 to-blue-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "coverage") {
    return (
      <div aria-hidden="true" className="site-coverage-map relative mx-auto min-h-[21rem] w-full max-w-lg overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-800 via-blue-800 to-slate-950 shadow-2xl shadow-blue-950/20">
        <div className="site-hero-visual-grid absolute inset-0 opacity-30" />
        <div className="site-map-road absolute left-[-10%] top-[43%] h-5 w-[125%] -rotate-[23deg] rounded-full border-y border-white/25 bg-white/10" />
        <div className="site-map-road absolute left-[20%] top-[-12%] h-[130%] w-4 rotate-[28deg] rounded-full border-x border-white/20 bg-white/[.08]" />
        <div className="site-map-road absolute left-[12%] top-[68%] h-3 w-[100%] rotate-[13deg] rounded-full border-y border-white/20 bg-white/[.08]" />
        <div className="absolute left-[13%] top-[18%] rounded-full border border-white/15 bg-slate-950/30 px-3 py-2 text-[10px] font-bold text-emerald-100 backdrop-blur">NETWORK AREA</div>
        <div className="absolute right-[13%] top-[19%] rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-bold text-white backdrop-blur">Nearby access</div>
        <span className="absolute left-[25%] top-[42%] grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-emerald-300 to-emerald-500 text-emerald-950 shadow-[0_0_28px_8px_rgba(87,227,37,.25)]"><MapPin size={21} /></span>
        <span className="absolute right-[22%] top-[54%] grid h-9 w-9 place-items-center rounded-full border-2 border-white/50 bg-blue-300 text-blue-950 shadow-[0_0_24px_6px_rgba(147,197,253,.28)]"><MapPin size={17} /></span>
        <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-slate-950/35 p-4 text-white backdrop-blur-md">
          <div><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-emerald-200">Coverage check</p><p className="mt-1 text-sm font-bold">Start with your address</p></div>
          <span className="flex items-center gap-1.5 rounded-full bg-emerald-300/15 px-3 py-1.5 text-[10px] font-bold text-emerald-100"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />Address by address</span>
        </div>
      </div>
    );
  }

  if (variant === "order") {
    return (
      <div aria-hidden="true" className="relative mx-auto w-full max-w-2xl py-5">
        <div className="absolute inset-2 -rotate-2 rounded-[2rem] bg-gradient-to-r from-emerald-300 to-blue-400 opacity-70 blur-sm" />
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950 p-6 text-white shadow-2xl shadow-blue-950/25 sm:p-8">
          <div className="site-hero-visual-grid absolute inset-0 opacity-25" />
          <div className="relative flex items-center justify-between gap-3 border-b border-white/15 pb-5">
            <div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-emerald-300">A simple way forward</p><h2 className="mt-1 text-2xl font-extrabold">Your connection, in motion.</h2></div>
            <ClipboardCheck className="shrink-0 text-blue-200" size={30} />
          </div>
          <div className="relative mt-8 grid grid-cols-3 gap-3">
            {[
              ["01", "Choose", "Find your package"],
              ["02", "Locate", "Share your address"],
              ["03", "Connect", "Confirm next steps"],
            ].map(([number, title, caption], index) => (
              <div className="relative min-h-28 rounded-2xl border border-white/15 bg-white/[.07] p-3 sm:p-4" key={number}>
                {index < 2 && <span className="absolute -right-3 top-7 z-10 hidden h-px w-3 bg-gradient-to-r from-emerald-300 to-blue-300 sm:block" />}
                <span className={`text-xs font-extrabold ${index === 0 ? "text-emerald-300" : "text-blue-200"}`}>{number}</span>
                <p className="mt-4 text-sm font-extrabold sm:text-base">{title}</p>
                <p className="mt-1 text-[10px] leading-4 text-blue-100 sm:text-xs">{caption}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-5 flex items-center gap-3 text-xs font-semibold text-blue-100"><span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/15"><span className="block h-full w-1/3 rounded-full bg-gradient-to-r from-emerald-300 to-blue-300" /></span><span>Start whenever you’re ready</span></div>
        </div>
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div aria-hidden="true" className="relative mx-auto w-full max-w-xl py-4">
        <div className="absolute right-[8%] top-0 h-40 w-40 rounded-full bg-blue-200/60 blur-3xl" />
        <div className="absolute bottom-0 left-[5%] h-40 w-40 rounded-full bg-emerald-200/60 blur-3xl" />
        <div className="relative flex min-h-[19rem] items-center justify-center">
          <div className="absolute left-0 top-[15%] max-w-[72%] rounded-2xl rounded-bl-sm border border-emerald-100 bg-white p-4 shadow-xl shadow-emerald-950/10 sm:left-4">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700">GET THRU</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">How can we help you today?</p>
          </div>
          <div className="absolute bottom-[18%] right-0 max-w-[68%] rounded-2xl rounded-br-sm bg-gradient-to-r from-emerald-700 to-blue-700 p-4 text-white shadow-xl shadow-blue-950/15 sm:right-4">
            <p className="text-xs font-semibold leading-5">I’d like to find the right connection for my area.</p>
            <p className="mt-2 text-right text-[10px] text-emerald-100">Your message · now</p>
          </div>
          <div className="relative z-10 grid h-20 w-20 place-items-center rounded-[1.75rem] border border-white bg-gradient-to-br from-emerald-600 to-blue-700 text-white shadow-2xl shadow-blue-900/25">
            <MessageCircle size={34} />
          </div>
          <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-800"><MessageCircle size={14} /></span>
            <span className="text-xs font-extrabold text-slate-700">WhatsApp · Phone · Email</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="relative mx-auto min-h-[20rem] w-full max-w-lg overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-5 sm:p-7">
      <div className="site-hero-visual-grid absolute inset-0 opacity-60" />
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-blue-300" />
      <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/80" />
      <div className="absolute left-1/2 top-1/2 z-10 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.6rem] bg-gradient-to-br from-emerald-600 to-blue-700 text-white shadow-xl shadow-blue-900/25"><Wifi size={34} /></div>
      <div className="absolute left-[9%] top-[13%] inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-2 text-xs font-extrabold text-slate-800 shadow-md"><span className="h-2 w-2 rounded-full bg-emerald-500" />Home</div>
      <div className="absolute right-[7%] top-[27%] inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-2 text-xs font-extrabold text-slate-800 shadow-md"><span className="h-2 w-2 rounded-full bg-blue-600" />Business</div>
      <div className="absolute bottom-[13%] left-[12%] inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-3 py-2 text-xs font-extrabold text-slate-800 shadow-md"><span className="h-2 w-2 rounded-full bg-emerald-500" />Community</div>
      <span className="absolute left-[32%] top-[22%] h-2 w-2 rounded-full bg-blue-500" />
      <span className="absolute bottom-[27%] right-[22%] h-2.5 w-2.5 rounded-full bg-emerald-500" />
      <div className="absolute bottom-5 right-5 rounded-xl bg-slate-900 px-3 py-2 text-[10px] font-bold text-white shadow-lg">One connection. More possibility.</div>
      </div>
  );
}

export default function PageHero({
  crumb,
  eyebrow,
  title,
  description,
  actions = [],
  navigate,
  visual = "connect",
}) {
  const breadcrumb = crumb.split("/ ").slice(1).join("/ ") || crumb;

  const isLearn = visual === "learn";
  const isContact = visual === "contact";
  const isCoverage = visual === "coverage";
  const isBusiness = visual === "business";
  const isOrder = visual === "order";
  const dark = isCoverage;

  const copy = (
    <div className={`max-w-2xl ${isLearn || isContact ? "mx-auto text-center" : ""}`}>
      <p className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold shadow-sm ${dark ? "border-white/20 bg-white/10 text-blue-50" : "border-blue-100 bg-white/75 text-slate-600"} ${isLearn || isContact ? "mx-auto" : ""}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Home <span className={dark ? "text-blue-200" : "text-slate-400"}>/</span> {breadcrumb}
      </p>
      <Eyebrow light={dark}>{eyebrow}</Eyebrow>
      <h1 className={`mt-4 text-4xl font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[3.7rem] ${dark ? "text-white" : "text-slate-950"} ${isLearn || isContact ? "mx-auto max-w-4xl" : "max-w-3xl"}`}>
        {title}
      </h1>
      <p className={`mt-5 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 ${dark ? "text-blue-100" : "text-slate-700"} ${isLearn || isContact ? "mx-auto" : ""}`}>
        {description}
      </p>
      {actions.length > 0 && (
        <div className={`mt-7 flex flex-wrap gap-3 ${isLearn || isContact ? "justify-center" : ""}`}>
          {actions.map(([to, label, variant = "outline"]) => (
            <ButtonLink key={label} to={to} variant={variant === "primary" ? "primary" : "outline"} navigate={navigate}>{label}</ButtonLink>
          ))}
        </div>
      )}
    </div>
  );

  if (isLearn) {
    return (
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-emerald-950 py-12 sm:py-16 lg:py-20">
        <div className="site-hero-visual-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
          {copy}
          <div className="mt-10 sm:mt-14"><HeroVisual variant={visual} /></div>
        </div>
      </section>
    );
  }

  if (isOrder) {
    return (
      <section className="site-grid-bg relative isolate overflow-hidden border-b border-emerald-100/70 py-12 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
          {copy}
          <div className="mx-auto mt-10 max-w-3xl sm:mt-12"><HeroVisual variant={visual} /></div>
        </div>
      </section>
    );
  }

  if (isContact) {
    return (
      <section className="site-grid-bg relative overflow-hidden border-b border-emerald-100/70 py-12 sm:py-16 lg:py-20">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-emerald-300/15 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-7 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:px-8">
          {copy}
          <HeroVisual variant={visual} />
        </div>
      </section>
    );
  }

  if (isCoverage) {
    return (
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-900 via-blue-950 to-slate-950 py-12 sm:py-16 lg:py-20">
        <div className="site-hero-visual-grid absolute inset-0 opacity-30" />
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-7 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {copy}
          <HeroVisual variant={visual} />
        </div>
      </section>
    );
  }

  return (
    <section className="site-grid-bg relative isolate overflow-hidden border-b border-emerald-100/70 py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-32 top-0 -z-10 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
      <div className={`mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-7 lg:gap-14 lg:px-8 ${isBusiness ? "lg:grid-cols-[.9fr_1.1fr]" : "lg:grid-cols-[1.04fr_.96fr]"}`}>
        {isBusiness ? <><HeroVisual variant={visual} />{copy}</> : <>{copy}<HeroVisual variant={visual} /></>}
      </div>
    </section>
  );
}
