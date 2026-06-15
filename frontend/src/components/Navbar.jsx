import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            ProDescription AI
          </h1>
        </div>

        {/* Center Navigation */}
        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-purple-600 transition">
            Home
          </Link>

          <Link to="/generate" className="hover:text-purple-600 transition">
            Generate
          </Link>

          <Link to="/dashboard" className="hover:text-purple-600 transition">
            Dashboard
          </Link>

          <Link to="/about" className="hover:text-purple-600 transition">
            About
          </Link>
        </div>

        {/* Right Button */}
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-xl transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;