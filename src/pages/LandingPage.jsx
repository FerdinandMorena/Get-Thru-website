import { useNavigate } from "react-router-dom";
import Home from "../components/Home";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    window.open("https://forms.office.com/Pages/ResponsePage.aspx?id=w5Oa04vlBEm6FgkD4fmxxui1ILaIl9tLs_OOl-FRyaBUQlcwN1VTRzc2QzhMWEpNSDNSSU1TV1A2QyQlQCN0PWcu", "_blank");
  };

  return <Home onGetStarted={handleGetStarted} />;
}
