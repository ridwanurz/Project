import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/layout.jsx";
import Home from "./page/home.jsx";
import About from "./page/about.jsx";
import Services from "./page/services.jsx";
import Portfolio from "./page/portfolio.jsx";
import Contact from "./page/contact.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}