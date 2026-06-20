import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Generate from "./pages/Generate";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/about"
          element={
            <About
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <Dashboard
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        <Route
          path="/generate"
          element={
            <Generate
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;