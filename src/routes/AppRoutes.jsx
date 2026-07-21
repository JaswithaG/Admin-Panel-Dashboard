import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";
import ProtectedRoute from "../components/ProtectedRoute";

// Authentication
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

// Pages
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Products from "../pages/Products/Products";
import Orders from "../pages/Orders/Orders";
import Analytics from "../pages/Analytics/Analytics";
import Calendar from "../pages/Calendar/Calendar";
import Notifications from "../pages/Notifications/Notifications";
import Messages from "../pages/Messages/Messages";
import Profile from "../pages/Profile/Profile";
import Settings from "../pages/Settings/Settings";

import LoadingScreen from "../pages/Loading/LoadingScreen";
import ErrorPage from "../pages/Error/ErrorPage";
import NotFound from "../pages/NotFound/NotFound";

import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";


const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* Default */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loading" element={<LoadingScreen />} />
        <Route path="/error" element={<ErrorPage />} />

        {/* Protected */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/users" element={<Users />} />

          <Route path="/products" element={<Products />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/analytics" element={<Analytics />} />

          <Route path="/calendar" element={<Calendar />} />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/messages"
            element={<Messages />}
          />

          <Route path="/profile" element={<Profile />} />

          <Route path="/settings" element={<Settings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
        <Route path="/forgot-password" element={<ForgotPassword />}/>

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;