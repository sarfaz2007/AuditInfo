import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ---------------- ADMIN ---------------- */

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Courses from "./pages/Courses";
import Colleges from "./pages/Colleges";

import AdminLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

/* ---------------- WEBSITE ---------------- */

import WebLogin from "./web/Login";
// import Home from "./web/Home";
// import About from "./web/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= WEBSITE ================= */}

        {/* Home Page */}
        {/* <Route path="/" element={<Home />} /> */}

        {/* Website Login */}
        <Route path="/login" element={<WebLogin />} />

        {/* About */}
        {/* <Route path="/about" element={<About />} /> */}


        {/* ================= ADMIN ================= */}

        {/* Admin Login */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Dashboard */}
          <Route index element={<Dashboard />} />

          {/* Categories */}
          <Route path="categories" element={<Categories />} />

          {/* Courses */}
          <Route path="courses" element={<Courses />} />

          {/* Colleges */}
          <Route path="colleges" element={<Colleges />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;