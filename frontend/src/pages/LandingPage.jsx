import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8ZW58MHx8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center p-8">
        {/* Header with Logo */}
        <div className="flex">
          <div className="flex gap-3 bg-white p-3 bg-opacity-40 border rounded-2xl">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SM</span>
            </div>
            <span className="text-white text-2xl font-bold">SocialHub</span>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Connect With Everyone
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl">
            Join our community and share your moments with the world. Express
            yourself, make connections, and build meaningful relationships.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => navigate("/register")}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              className="px-8 py-4 bg-white text-gray-900 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Login
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center text-gray-200 text-sm">
          <p>&copy; 2026 SocialHub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
