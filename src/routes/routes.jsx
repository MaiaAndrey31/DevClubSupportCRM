import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trophy from "../Pages/Trophy";
import Home from "../Pages/Home";
import Links from "../Pages/Links";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painel" element={<Trophy />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  );
}
