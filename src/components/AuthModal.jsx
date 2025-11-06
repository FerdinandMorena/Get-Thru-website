import { useState, useEffect } from "react";
import { X, Mail, Lock, User, AlertCircle, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export default function AuthModal({ isOpen, onClose, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signIn, signUp } = useAuth();

  // Lock/unlock scroll when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Basic validation
      if (mode === "register") {
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
      }

      // Simulate loading delay for better UX
      await new Promise(resolve => setTimeout(resolve, 800));

      // Store user info in localStorage (temporary solution without backend)
      const userData = {
        email: email,
        name: mode === "register" ? fullName : email.split('@')[0],
        loggedIn: true,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('user', JSON.stringify(userData));

      // Call signIn/signUp to trigger navigation to dashboard
      if (mode === "register") {
        await signUp(email, password, fullName);
      } else {
        await signIn(email, password);
      }
      
      onClose();
    } catch (err) {
      // Even if there's an error, we'll proceed (no backend validation)
      const userData = {
        email: email,
        name: mode === "register" ? fullName : email.split('@')[0],
        loggedIn: true,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Still call the auth functions to trigger navigation
      try {
        if (mode === "register") {
          await signUp(email, password, fullName);
        } else {
          await signIn(email, password);
        }
      } catch {
        // Ignore errors and proceed
      }
      
      onClose();
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setMode(mode === "login" ? "register" : "login");
    setError("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-0 sm:p-4 py-0 sm:py-4 overflow-y-auto">
      <div className="bg-white rounded-none sm:rounded-3xl shadow-2xl max-w-md w-full relative animate-fadeIn my-0 sm:my-8 min-h-screen sm:min-h-0 max-h-screen sm:max-h-[calc(100vh-4rem)] flex flex-col">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-emerald-600 hover:to-blue-600 p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all duration-300 z-10"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="p-4 sm:p-6 md:p-8 pt-3 sm:pt-4 md:pt-6 overflow-y-auto flex-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-1.5 sm:mb-2 mt-1 sm:mt-2">
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              {mode === "login" ? "Welcome Back" : "Join GetThru"}
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mb-4 sm:mb-6">
            {mode === "login"
              ? "Sign in to access your digital learning journey"
              : "Start your journey to digital empowerment"}
          </p>

          {error && (
            <div className="mb-3 sm:mb-4 p-2.5 sm:p-3 bg-red-50 border-2 border-red-200 rounded-xl sm:rounded-2xl flex items-start gap-2 sm:gap-3">
              <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <p className="text-red-800 text-xs sm:text-sm font-medium">
                {error}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {mode === "register" && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <div
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
                    }}
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-16 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm sm:text-base"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>
            )}

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
                  className="w-full pl-16 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm sm:text-base"
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
                  className="w-full pl-16 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm sm:text-base"
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

            {mode === "register" && (
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
                    className="w-full pl-16 pr-12 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all font-medium text-sm sm:text-base"
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
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full text-white py-3.5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-6"
              style={{
                background: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",
              }}
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                ? "Sign In"
                : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm sm:text-base text-gray-600 font-medium">
              {mode === "login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={switchMode}
                className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-bold hover:from-emerald-700 hover:to-blue-700 transition-all"
              >
                {mode === "login" ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          {mode === "register" && (
            <p className="text-center text-xs text-gray-500 mt-4">
              By signing up, you agree to our Terms of Service and Privacy
              Policy
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
