import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; //Parent route with Outlet
import Home from "./pages/Home"; // Child route component
import SignUp from "./pages/auth/SignUp"; // Child route component
import Login from "./pages/auth/Login"; // Child route component
import Dashboard from "./pages/auth/Dashboard"; // Child route component
import AboutUs from "./pages/AboutUs"; // Child route component
import FashionPage from "./pages/FashionPage"; // Child route component
import Contact from "./pages/Contact"; // Child route component

import PrivateRoutes from "./components/layout/PrivateRoutes"; // Private route component

function App() {
  return (
    <Routes>
      {/* Child routes will render inside the Outlet of the parent Layout */}
      <Route path="/" element={<Layout />}>
        {/* index is used to signify that it is the default route within its parent, making it the main page of my application. */}
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        {/* PRIVATE AUTH ROUTES */}
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="about" element={<AboutUs />} />
        <Route path="fashion" element={<FashionPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
