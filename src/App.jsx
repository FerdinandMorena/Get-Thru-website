import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Protected route wrapper
function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  if (!user || !user.loggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default function App() {
  return (
    // <AuthProvider>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<LandingPage />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route
    //         path="/dashboard"
    //         element={
    //           <ProtectedRoute>
    //             <Dashboard />
    //           </ProtectedRoute>
    //         }
    //       />
    //     </Routes>
    //   </Router>
    // </AuthProvider>
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-4">
      <div className="bg-slate-800 shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Temporarily Unavailable</h1>

        <p className="text-gray-300 mb-3">
          This website is currently unavailable due to a billing issue.
        </p>

        <p className="text-gray-400 text-sm">
          Please contact support for more information.
        </p>
      </div>
    </div>
  );
}
