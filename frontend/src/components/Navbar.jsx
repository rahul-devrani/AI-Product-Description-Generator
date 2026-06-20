import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              ProDescription AI
            </h1>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">

            <Link
              to="/"
              className="hover:text-purple-600 transition"
            >
              Home
            </Link>

            <Link
              to="/generate"
              className="hover:text-purple-600 transition"
            >
              Generate
            </Link>

            <Link
              to="/dashboard"
              className="hover:text-purple-600 transition"
            >
              Dashboard
            </Link>

            <Link
              to="/about"
              className="hover:text-purple-600 transition"
            >
              About
            </Link>

          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-xl text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? "☀ Light" : "🌙 Dark"}
            </button>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl transition text-sm md:text-base">
              Sign Up
            </button>



          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;