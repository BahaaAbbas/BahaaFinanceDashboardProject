import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Wallets from "../pages/Wallets";
import Budgets from "../pages/Budgets";
import Goals from "../pages/Goals";
import Profile from "../pages/Profile";
import Analytics from "../pages/Analytics";
import Notifications from "../pages/Notifications";
import SignUp from "../pages/SignUp";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import SearchViewer from "../pages/SearchViewer";

const router = createBrowserRouter([

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "wallets", element: <Wallets /> },
      { path: "budgets", element: <Budgets /> },
      { path: "goals", element: <Goals /> },
      { path: "profile", element: <Profile /> },
      { path: "analytics", element: <Analytics /> },
      { path: "notification", element: <Notifications /> },
      { path: "searchviewer", element: <SearchViewer /> },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },






]);


export default router