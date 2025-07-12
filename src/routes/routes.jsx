import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trophy from "../Pages/Trophy";
import Home from "../Pages/Home";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painel" element={<Trophy />} />
      </Routes>
    </Router>
  );
}
