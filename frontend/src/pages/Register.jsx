import { useState } from "react";
import { Eye, EyeOff, Loader2  } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { registerUser } from "../api/auth";

function Register({ darkMode, setDarkMode }) {

  const navigate = useNavigate();

const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
});

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    setSuccess("");

    try {

      if (formData.password !== formData.confirmPassword) {

        setError("Passwords do not match.");

        setLoading(false);

        return;

      }

      const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

      if (!passwordRegex.test(formData.password)) {

        setError(
          "Password must be at least 8 characters and include uppercase, lowercase and a number."
        );

        setLoading(false);

        return;

      }

      const payload = {

        name: formData.name,

        email: formData.email,

        password: formData.password

        };

      await registerUser(payload);

      setSuccess("Registration successful.");

      setTimeout(() => {
        navigate("/login", { replace: true });
      }, 1500);

    }

    catch (err) {

      setError(
        err.response?.data?.detail ||
        "Registration failed."
      );

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex items-center justify-center px-4 py-10">

        <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8">

          <h1 className="text-3xl font-bold text-center text-purple-600 mb-2">
            Create Account
          </h1>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
            Join ProDescription AI
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
              <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>

              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 pr-12 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>

              </div>

              <p className="text-xs text-gray-500 mt-1">
                Password must contain at least 8 characters, one uppercase letter,
                one lowercase letter and one number.
              </p>

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Confirm Password
              </label>

              <div className="relative">

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 pr-12 bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-purple-500"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            {
              error && (
                <p className="text-red-500 text-sm">
                  {error}
                </p>
              )
            }

            {
              success && (
                <p className="text-green-600 text-sm">
                  {success}
                </p>
              )
            }

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>

            <p className="text-center text-sm pt-2">
              Already have an account?

              <Link
                to="/login"
                className="text-purple-600 font-semibold ml-2"
              >
                Login
              </Link>

            </p>

          </form>

        </div>

      </div>

    </>

  );

}

export default Register;



  