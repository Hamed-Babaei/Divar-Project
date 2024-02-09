import PageNotFound from "src/pages/404";
import AdminPage from "src/pages/AdminPage";
import AuthPage from "src/pages/AuthPage";
import DashboardPage from "src/pages/DashboardPage";
import HomePage from "src/pages/HomePage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/auth", element: <AuthPage /> },
  { path: "/admin", element: <AdminPage /> },
  { path: "*", element: <PageNotFound /> },
];

export default routes;
