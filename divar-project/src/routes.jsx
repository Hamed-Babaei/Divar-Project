import Index from "./Pages/Index/Index";
import ContactUs from "./Pages/Contact_Us/Contact_us";
import AboutUs from "./Pages/About_Us/AboutUs";
import Download from "./Pages/Download/Download";
import Products from "./Pages/Products/Products";
import Main from "./Pages/Main/Main";
import Panel from "./Pages/Panel/Panel";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/s/*", element: <Main /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/download", element: <Download /> },
  { path: "/product", element: <Products /> },

  // User Panel Routes
  { path: "/panel", element: <Panel /> },
];

export default routes;
