import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ---------------- ADMIN ---------------- */

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

import AdminCategories from "./Pages/Categories";
import AdminCourses from "./Pages/Courses";
import AdminColleges from "./Pages/Colleges";

import AdminLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

/* ---------------- WEBSITE ---------------- */

import Homepage from "./web/Homepage";
import WebLogin from "./web/Login";

import Categories from "./web/Category";
import Courses from "./web/Courses";
import Colleges from "./web/College";

import AllCoursesPage from "./web/AllCoursesPage";
import College from "./web/College";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= WEBSITE ================= */}

        <Route path="/" element={<Homepage />} />

        <Route
          path="/login"
          element={<WebLogin />}
        />

        <Route
          path="/categories"
          element={<Categories />}
        />

        <Route
          path="/courses/:categoryId"
          element={<Courses />}
        />

        <Route
          path="/college"
          element={<Colleges />}
        />

        <Route path="/courses"
          element={<AllCoursesPage />}
        />

        <Route
          path="/college"
          element={<College />}
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
            path="/admin/categories"
            element={<AdminCategories />}
          />

          <Route
            path="/admin/courses"
            element={<AdminCourses />}
          />

          <Route
            path="/admin/colleges"
            element={<AdminColleges />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;