import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, BookOpen, Wifi, Award, LogOut } from "lucide-react";

export default function Dashboard() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  
  // Get user from localStorage
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  
  const handleSignOut = () => {
    localStorage.removeItem("user");
    signOut();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                src="/logo.jpg"
                alt="Get Thru logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                GetThru
              </h1>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 border-2 border-red-600 text-red-600 hover:bg-red-50 hover:scale-105 transform"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6 sm:mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-100 p-4 rounded-full">
              <User className="w-8 h-8 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Welcome back{userData.name ? `, ${userData.name}` : ''}!
              </h2>
              <p className="text-gray-600">{userData.email}</p>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed">
            You're on your way to digital empowerment. Continue your learning
            journey and explore new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard
            icon={<BookOpen className="w-8 h-8 text-blue-600" />}
            title="My Courses"
            description="Access your enrolled courses and track your progress"
            bgColor="bg-blue-50"
          />
          <DashboardCard
            icon={<Wifi className="w-8 h-8 text-emerald-600" />}
            title="Internet Plans"
            description="Manage your affordable internet subscription"
            bgColor="bg-emerald-50"
          />
          <DashboardCard
            icon={<Award className="w-8 h-8 text-orange-600" />}
            title="Achievements"
            description="View your certificates and completed milestones"
            bgColor="bg-orange-50"
          />
        </div>

        <div className="mt-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
          <p className="text-emerald-50 mb-6 text-lg">
            Explore our library of digital skills courses designed to help you
            succeed in the modern economy.
          </p>
          <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105">
            Browse Courses
          </button>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, description, bgColor }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
      <div className={`${bgColor} p-6`}>{icon}</div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
