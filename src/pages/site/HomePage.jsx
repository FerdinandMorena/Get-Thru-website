import ButtonLink from "../../components/site/ButtonLink";
import ContentCard from "../../components/site/ContentCard";
import Eyebrow from "../../components/site/Eyebrow";
import { pagePath } from "../../components/site/constants";

const journeySteps = [
  ["01 · CHOOSE", "Pick a pathway", "Connectivity, learning or business support."],
  ["02 · ENQUIRE", "Tell us what you need", "Share your contact details and location."],
  ["03 · CONNECT", "We follow up", "Our team confirms availability and next steps."],
  ["04 · GROW", "Keep moving", "Discover more ways to participate digitally."],
];

export default function HomePage({ navigate }) {
  return (
    <>
      <section
        className="site-home-hero relative isolate overflow-hidden bg-cover bg-center py-16 sm:py-20 lg:flex lg:min-h-[min(760px,calc(100svh-110px))] lg:items-center lg:py-16"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(6,78,59,.92) 0%, rgba(21,62,117,.91) 58%, rgba(23,37,84,.91) 100%), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
        }}
      >
        <div className="pointer-events-none absolute -right-36 -top-36 -z-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-7 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:px-8">
          <div>
            <Eyebrow light>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-300 align-middle" />
              Technology for empowerment
            </Eyebrow>
            <h1 className="mt-6 text-[clamp(2.7rem,6vw,4.75rem)] font-extrabold leading-[1.03] tracking-[-.055em] text-white">
              Get connected.
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                Get empowered.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
              Digital opportunity starts with access. Get Thru brings
              connectivity, practical digital skills and pathways to grow into
              one connected journey.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink navigate={navigate} to="coverage" variant="primary">
                Check availability ↗
              </ButtonLink>
              <ButtonLink navigate={navigate} to="learn-grow" variant="glass">
                Explore digital skills
              </ButtonLink>
            </div>
            <p className="mt-6 text-xs leading-5 text-slate-200 sm:text-sm">
              Home and business connectivity · Digital learning · Community
              opportunity
            </p>
          </div>

          <div
            aria-label="Connect, learn, earn"
            className="rounded-[1.75rem] border border-white/30 bg-white/10 p-3 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-5"
          >
            <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
              <img
                alt="Get Thru"
                className="mb-6 h-[72px] w-[72px] rounded-2xl object-cover shadow-md"
                src="/logo.jpg"
              />
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
                CONNECT
                <br />
                LEARN
                <br />
                EARN
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                One journey. More opportunity.
              </p>
              <div className="mt-6 grid gap-2.5">
                {[
                  "Access for everyday life",
                  "Practical digital skills",
                  "Pathways to grow",
                ].map((item) => (
                  <div
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-bold text-slate-700"
                    key={item}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-600 to-blue-600 text-xs text-white">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
            <Eyebrow>How Get Thru helps</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.65rem]">
              Access is the beginning.
              <br />
              Opportunity is the goal.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
              Choose what you need today. Discover where it can take you next.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <ContentCard icon="⌁">
              <span className="mb-2 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-800">
                01 · Connect
              </span>
              <h3 className="mb-2 text-xl font-extrabold text-slate-900">
                Home &amp; business internet
              </h3>
              <p className="mb-5 text-sm leading-6 text-slate-600">
                Explore connectivity options for households, professionals and
                growing businesses. Start with a coverage enquiry.
              </p>
              <a
                className="mt-auto text-sm font-extrabold text-blue-700 hover:underline"
                href={pagePath("connect")}
                onClick={(event) => navigate(event, "connect")}
              >
                Explore internet packages →
              </a>
            </ContentCard>
            <ContentCard accent icon="▤">
              <span className="mb-2 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-800">
                02 · Learn
              </span>
              <h3 className="mb-2 text-xl font-extrabold text-slate-900">
                Practical digital skills
              </h3>
              <p className="mb-5 text-sm leading-6 text-slate-600">
                Discover computer skills, workplace productivity, AI awareness
                and learning pathways for digital participation.
              </p>
              <a
                className="mt-auto text-sm font-extrabold text-blue-700 hover:underline"
                href={pagePath("learn-grow")}
                onClick={(event) => navigate(event, "learn-grow")}
              >
                Explore learning →
              </a>
            </ContentCard>
            <ContentCard icon="↗">
              <span className="mb-2 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-emerald-800">
                03 · Earn
              </span>
              <h3 className="mb-2 text-xl font-extrabold text-slate-900">
                Opportunities to grow
              </h3>
              <p className="mb-5 text-sm leading-6 text-slate-600">
                Explore digital entrepreneurship, business enablement and ways
                to put digital skills into practice.
              </p>
              <a
                className="mt-auto text-sm font-extrabold text-blue-700 hover:underline"
                href={pagePath("learn-grow")}
                onClick={(event) => navigate(event, "learn-grow")}
              >
                Explore opportunities →
              </a>
            </ContentCard>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-50 to-blue-50/70 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-start gap-9 px-5 sm:px-7 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <Eyebrow>A simple customer journey</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Your next step starts here.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Whether you want internet at home, connectivity for your business
              or a chance to build digital skills, we’ll help you find the right
              pathway.
            </p>
            <ButtonLink
              className="mt-6"
              navigate={navigate}
              to="contact"
              variant="blue"
            >
              Talk to Get Thru
            </ButtonLink>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {journeySteps.map(([label, title, copy]) => (
              <article
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                key={label}
              >
                <b className="text-xs font-extrabold tracking-wide text-emerald-800">
                  {label}
                </b>
                <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-emerald-800 to-blue-700 p-7 text-white shadow-xl shadow-blue-900/15 sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Ready to get connected?
              </h2>
              <p className="mt-2 text-sm leading-6 text-blue-50 sm:text-base">
                Start with a coverage enquiry or compare packages.
              </p>
            </div>
            <ButtonLink navigate={navigate} to="coverage" variant="primary">
              Check my area ↗
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
