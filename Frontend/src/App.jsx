import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ---------------- ADMIN ---------------- */

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import AdminCategories from "./pages/Categories";
import AdminCourses from "./pages/Courses";
import AdminColleges from "./pages/Colleges";

import AdminLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

/* ---------------- WEBSITE ---------------- */

import Homepage from "./web/Homepage";
import WebLogin from "./web/Login";

import Categories from "./web/Category";
import Courses from "./web/Courses";
import Colleges from "./web/College";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= WEBSITE ================= */}

        {/* Website Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Website Login */}
        <Route path="/login" element={<WebLogin />} />

        {/* Website Pages */}
        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

        <Route
          path="/college"
          element={<Colleges />}
        />


        {/* ================= ADMIN ================= */}

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<Login />}
        />

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
          <Route
            path="categories"
            element={<AdminCategories />}
          />

          {/* Courses */}
          <Route
            path="courses"
            element={<AdminCourses />}
          />

          {/* Colleges */}
          <Route
            path="colleges"
            element={<AdminColleges />}
          />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;