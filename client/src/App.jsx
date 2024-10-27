import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout"; //Parent route with Outlet
import Home from "./pages/Home"; // Child route component
import AboutUs from "./pages/AboutUs"; // Child route component
import FashionPage from "./pages/FashionPage"; // Child route component
import Contact from "./pages/Contact"; // Child route component

function App() {
  return (
    <Routes>
      {/* Child routes will render inside the Outlet of the parent Layout */}
      <Route path="/" element={<Layout />}>
        {/* index is used to signify that it is the default route within its parent, making it the main page of my application. */}
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="fashion" element={<FashionPage />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
