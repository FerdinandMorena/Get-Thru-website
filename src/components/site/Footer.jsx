import Brand from "./Brand";
import { navigation, pagePath } from "./constants";

export default function Footer({ navigate }) {
  const linkClass =
    "text-sm text-slate-300 transition hover:text-white hover:underline";

  return (
    <footer className="mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 text-white sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-7 lg:px-8">
        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div>
            <Brand inverse onClick={(event) => navigate(event, "home")} />
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Technology for empowerment. Connecting people to opportunity
              through connectivity, practical digital skills and pathways into
              the digital economy.
            </p>
            <b className="mt-4 inline-block text-xs tracking-wide text-emerald-300">
              CONNECT → LEARN → EARN
            </b>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-extrabold uppercase tracking-widest text-emerald-300">
              Explore
            </h2>
            <div className="grid gap-3">
              {["connect", "business", "learn-grow", "order"].map((id) => (
                <a
                  className={linkClass}
                  href={pagePath(id)}
                  key={id}
                  onClick={(event) => navigate(event, id)}
                >
                  {navigation.find(([key]) => key === id)?.[1] ||
                    "Order internet"}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-extrabold uppercase tracking-widest text-emerald-300">
              Community solutions
            </h2>
            <div className="grid gap-3">
              <a
                className={linkClass}
                href={pagePath("connect")}
                onClick={(event) => navigate(event, "connect")}
              >
                Community connectivity
              </a>
              <a
                className={linkClass}
                href={pagePath("connect")}
                onClick={(event) => navigate(event, "connect")}
              >
                Smart community hubs
              </a>
              <a
                className={linkClass}
                href={pagePath("business")}
                onClick={(event) => navigate(event, "business")}
              >
                Enterprise enablement
              </a>
              <a
                className={linkClass}
                href={pagePath("contact")}
                onClick={(event) => navigate(event, "contact")}
              >
                Partnerships
              </a>
            </div>
          </div>
          <div>
            <h2 className="mb-4 text-xs font-extrabold uppercase tracking-widest text-emerald-300">
              Contact
            </h2>
            <div className="grid gap-3">
              <a
                className={linkClass}
                href="https://wa.me/27706528395"
                rel="noreferrer"
                target="_blank"
              >
                WhatsApp: 070 652 8395
              </a>
              <a className={linkClass} href="mailto:info@getthru.co.za">
                info@getthru.co.za
              </a>
              <a className={linkClass} href="https://getthru.co.za">
                www.getthru.co.za
              </a>
              <a
                className={linkClass}
                href={pagePath("contact")}
                onClick={(event) => navigate(event, "contact")}
              >
                Contact &amp; support
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs leading-5 text-slate-300 sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} Get Thru · Powered by Technorain
            Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}
