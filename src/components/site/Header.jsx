import { useState } from "react";
import Brand from "./Brand";
import ButtonLink from "./ButtonLink";
import { navigation, pagePath } from "./constants";

export default function Header({ page, navigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigate(event, id) {
    navigate(event, id);
    setMenuOpen(false);
  }

  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 px-5 py-2 text-center text-[11px] font-medium text-slate-100 sm:px-7 sm:text-xs lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1 sm:justify-between">
          <span>
            <b className="text-emerald-300">Get connected.</b> Get skilled. Get
            empowered.
          </span>
          <span>
            WhatsApp / Phone{" "}
            <b className="text-emerald-300">070 652 8395</b> ·{" "}
            <a className="hover:underline" href="mailto:info@getthru.co.za">
              info@getthru.co.za
            </a>
          </span>
        </div>
      </div>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
        <nav
          aria-label="Main navigation"
          className="relative mx-auto flex min-h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-7 lg:px-8"
        >
          <Brand onClick={(event) => handleNavigate(event, "home")} />
          <button
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 text-sm font-bold text-slate-800 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
            <span>{menuOpen ? "CLOSE" : "MENU"}</span>
          </button>

          <div className="hidden items-center gap-1 md:flex" id="desktop-navigation">
            {navigation.map(([id, label]) => (
              <a
                aria-current={page === id ? "page" : undefined}
                className={`rounded-lg px-3 py-2 text-sm font-bold transition hover:bg-emerald-50 hover:text-emerald-800 ${
                  page === id ? "text-emerald-800" : "text-slate-700"
                }`}
                href={pagePath(id)}
                key={id}
                onClick={(event) => handleNavigate(event, id)}
              >
                {label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ButtonLink
              className="min-h-10 px-4 text-xs"
              navigate={handleNavigate}
              to="coverage"
            >
              Check availability
            </ButtonLink>
            <ButtonLink
              className="min-h-10 px-4 text-xs"
              navigate={handleNavigate}
              to="order"
              variant="primary"
            >
              Order internet ↗
            </ButtonLink>
          </div>

          {menuOpen && (
            <div
              className="absolute left-0 right-0 top-full border-t border-slate-100 bg-white p-4 shadow-xl md:hidden"
              id="mobile-navigation"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1">
                {navigation.map(([id, label]) => (
                  <a
                    aria-current={page === id ? "page" : undefined}
                    className={`rounded-lg px-4 py-3 text-sm font-bold hover:bg-emerald-50 ${
                      page === id ? "text-emerald-800" : "text-slate-700"
                    }`}
                    href={pagePath(id)}
                    key={id}
                    onClick={(event) => handleNavigate(event, id)}
                  >
                    {label}
                  </a>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-100 pt-4">
                  <ButtonLink
                    className="px-3 text-xs"
                    navigate={handleNavigate}
                    to="coverage"
                  >
                    Check availability
                  </ButtonLink>
                  <ButtonLink
                    className="px-3 text-xs"
                    navigate={handleNavigate}
                    to="order"
                    variant="primary"
                  >
                    Order internet ↗
                  </ButtonLink>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
