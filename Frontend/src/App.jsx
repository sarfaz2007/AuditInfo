import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Courses from "./pages/Courses";
import Colleges from "./pages/Colleges";

import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Categories */}
        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Categories />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Courses */}
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Courses />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        {/* Colleges */}
        <Route
          path="/colleges"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Colleges />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;