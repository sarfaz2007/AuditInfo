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

        <Route path="/web" element={<Homepage />} />

        <Route
          path="/web/login"
          element={<WebLogin />}
        />

        <Route
          path="/web/categories"
          element={<Categories />}
        />

        <Route
          path="/web/courses/:categoryId"
          element={<Courses />}
        />

        <Route
          path="/web/college"
          element={<Colleges />}
        />


        {/* ================= ADMIN ================= */}

        <Route
          path="/admin/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />

          <Route
            path="categories"
            element={<AdminCategories />}
          />

          <Route
            path="courses"
            element={<AdminCourses />}
          />

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