import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/painel" element={<App />} />
      </Routes>
    </Router>
  );
}
