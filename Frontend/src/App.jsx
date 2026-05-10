import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Categories from './pages/Categories'
import Courses from './pages/Courses'
import Colleges from './pages/Colleges'

import AdminLayout from './layouts/DashboardLayout'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path='categories' element={<Categories />} />
          <Route path='courses' element={<Courses />} />
          <Route path='colleges' element={<Colleges />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App