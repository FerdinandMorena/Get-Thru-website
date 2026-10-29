import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/site/Header";
import Footer from "../components/site/Footer";
import WhatsAppCTA from "../components/site/WhatsAppCTA";
import { pagePath } from "../components/site/constants";
import BusinessPage from "./site/BusinessPage";
import ConnectPage from "./site/ConnectPage";
import ContactPage from "./site/ContactPage";
import CoveragePage from "./site/CoveragePage";
import HomePage from "./site/HomePage";
import LearnPage from "./site/LearnPage";
import OrderPage from "./site/OrderPage";

const pageIds = new Set([
  "home",
  "connect",
  "business",
  "learn-grow",
  "coverage",
  "order",
  "contact",
]);

function getCurrentPage(pathname) {
  const path = pathname.replace(/\/$/, "");
  const page = path.slice(1);
  return pageIds.has(page) ? page : "home";
}

export default function LandingPage() {
  const location = useLocation();
  const routerNavigate = useNavigate();
  const page = getCurrentPage(location.pathname);
  const [selectedPackage, setSelectedPackage] = useState("");

  const navigate = useCallback((event, destination) => {
    event?.preventDefault();

    if (destination === "business-form" || destination === "learning-form") {
      const ownerPage =
        destination === "business-form" ? "business" : "learn-grow";
      routerNavigate(pagePath(ownerPage), {
        state: { scrollTarget: destination },
      });
      return;
    }

    const nextPage = pageIds.has(destination) ? destination : "home";
    routerNavigate(pagePath(nextPage));
  }, [routerNavigate]);

  useEffect(() => {
    if (!pageIds.has(location.pathname.replace(/\/$/, "").slice(1)) &&
        location.pathname !== "/") {
      routerNavigate("/", { replace: true });
      return;
    }

    const scrollTarget = location.state?.scrollTarget;
    window.requestAnimationFrame(() => {
      if (scrollTarget) {
        document
          .getElementById(scrollTarget)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }, [location.pathname, location.state, routerNavigate]);

  const pageComponents = {
    home: <HomePage navigate={navigate} />,
    connect: (
      <ConnectPage
        navigate={navigate}
        onSelectPackage={setSelectedPackage}
      />
    ),
    business: <BusinessPage navigate={navigate} />,
    "learn-grow": <LearnPage navigate={navigate} />,
    coverage: <CoveragePage />,
    order: <OrderPage selectedPackage={selectedPackage} />,
    contact: <ContactPage />,
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Header navigate={navigate} page={page} />
      <main>{pageComponents[page]}</main>
      <Footer navigate={navigate} />
      <WhatsAppCTA />
    </div>
  );
}
