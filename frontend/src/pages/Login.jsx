import { useState } from "react";

import {
  Eye,
  EyeOff,
  Loader2
} from "lucide-react";

import {
  Link,
  useNavigate
} from "react-router-dom";

import {
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";

import { auth } from "../firebase";

import Navbar from "../components/Navbar";

import {
  loginUser,
  googleLogin
} from "../api/auth";

function Login({
  darkMode,
  setDarkMode
}) {

  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const [formData, setFormData] = useState({

    email: "",

    password: ""

  });

  const [loading, setLoading] = useState(false);

  const [googleLoading, setGoogleLoading] = useState(false);

  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

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

    try {

      const response = await loginUser(formData);

      localStorage.setItem(
        "token",
        response.data.access_token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.user
        )
      );

      navigate(
        "/dashboard",
        {
          replace: true
        }
      );

    }

    catch (err) {

      setError(

        err.response?.data?.detail ||

        "Login failed."

      );

    }

    finally {

      setLoading(false);

    }

  };

  const handleGoogleLogin = async () => {

    setGoogleLoading(true);

    setError("");

    try {

      const result = await signInWithPopup(

        auth,

        provider

      );

      const idToken =
        await result.user.getIdToken();

      const response =
        await googleLogin(idToken);

      localStorage.setItem(

        "token",

        response.data.access_token

      );

      localStorage.setItem(

        "user",

        JSON.stringify(
          response.data.user
        )

      );

      navigate(
        "/dashboard",
        {
          replace: true
        }
      );

    }

    catch (err) {

      console.error(err);

      setError(
        "Google Login Failed."
      );

    }

    finally {

      setGoogleLoading(false);

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

            Welcome Back

          </h1>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">

            Login to ProDescription AI

          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
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
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

            </div>

            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Logging In...
                </>
              ) : (
                "Login"
              )}
            </button>

            <div className="flex items-center my-4">

              <div className="flex-1 border-t border-gray-300"></div>

              <span className="mx-4 text-gray-500 text-sm">
                OR
              </span>

              <div className="flex-1 border-t border-gray-300"></div>

            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={googleLoading}
              className="w-full border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 py-3 rounded-xl font-semibold transition flex justify-center items-center gap-2"
            >
              {googleLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing In...
                </>
              ) : (
                <>
                  <img
                    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </>
              )}
            </button>

            <p className="text-center text-sm pt-4">

              Don't have an account?

              <Link
                to="/register"
                className="text-purple-600 font-semibold ml-2"
              >
                Sign Up
              </Link>

            </p>

          </form>

        </div>

      </div>

    </>

  );

}

export default Login;