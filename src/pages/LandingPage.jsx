import { useNavigate } from "react-router-dom";
import Home from "../components/Home";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/register");
  };

  return <Home onGetStarted={handleGetStarted} />;
}
