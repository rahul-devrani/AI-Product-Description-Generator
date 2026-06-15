import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Generate from "./pages/Generate";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/generate"
          element={<Generate />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;