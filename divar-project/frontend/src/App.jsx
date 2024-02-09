import routes from "./router/routes";
import { useRoutes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import DashboardPage from "./pages/DashboardPage";
// import AuthPage from "./pages/AuthPage";
// import AdminPage from "./pages/AdminPage";
// import PageNotFound from "./pages/404";

// const routes = [
//   { path: "/", element: <HomePage /> },
//   { path: "/dashboard", element: <DashboardPage /> },
//   { path: "/auth", element: <AuthPage /> },
//   { path: "/admin", element: <AdminPage /> },
//   { path: "*", element: <PageNotFound /> },
// ];

function App() {
  const router = useRoutes(routes);
  return <>{router}</>;
}

export default App;
