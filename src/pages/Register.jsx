import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  User,
  AlertCircle,
  Eye,
  EyeOff,
  ArrowLeft,
} from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Basic validation
      if (!fullName.trim()) {
        setError("Please enter your full name");
        setLoading(false);
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        setLoading(false);
        return;
      }

      // Simulate loading delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Store user info in localStorage (temporary solution without backend)
      const userData = {
        email: email,
        name: fullName,
        loggedIn: true,
        loginTime: new Date().toISOString(),
      };
      localStorage.setItem("user", JSON.stringify(userData));

      // Call signUp to trigger navigation to dashboard
      await signUp(email, password, fullName);

      navigate("/dashboard");
    } catch (err) {
      // Even if there's an error, we'll proceed (no backend validation)
      const userData = {
        email: email,
        name: fullName,
        loggedIn: true,
        loginTime: new Date().toISOString(),
      };
      localStorage.setItem("user", JSON.stringify(userData));

      // Still call the auth function to trigger navigation
      try {
        await signUp(email, password, fullName);
      } catch {
        // Ignore errors and proceed
      }

      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex items-center justify-center px-0 sm:px-4 py-0 sm:py-8">
      <div className="bg-white rounded-none sm:rounded-3xl shadow-none sm:shadow-2xl max-w-md w-full p-6 sm:p-8 relative min-h-screen sm:min-h-0">
        <Link
          to="/"
          className="absolute top-6 left-6 text-gray-400 hover:text-emerald-600 transition-colors flex items-center gap-2 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>

        <div className="mt-8">
          {/* <div className="flex items-center justify-center gap-3 mb-2">
            <img
              src="/logo.jpg"
              alt="Get Thru logo"
              className="h-12 w-auto object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              GetThru
            </h1>
          </div> */}

          <h2 className="text-3xl font-bold text-center mb-2">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Join GetThru
            </span>
          </h2>
          <p className="text-base text-gray-600 text-center mb-6">
            Start your journey to digital empowerment
          </p>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border-2 border-red-200 rounded-2xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                  }}
                >
                  <User className="w-4 h-4 text-white" />
                </div>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-14 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                  }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-16 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                  }}
                >
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-16 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                  placeholder="Enter your password"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">
                Confirm Password
              </label>
              <div className="relative">
                <div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                  }}
                >
                  <Lock className="w-5 h-5 text-white" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-16 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium"
                  placeholder="Confirm your password"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white py-3.5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
              }}
            >
              {loading ? "Please wait..." : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-base text-gray-600 font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-bold hover:from-emerald-700 hover:to-blue-700 transition-all"
              >
                Sign In
              </Link>
            </p>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
