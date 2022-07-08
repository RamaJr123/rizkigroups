import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Service from './components/Services/Service';
import PricingPage from './components/Pricing/PricingPage';
import Package from './components/Package/Package';
import Question from './components/Question/Question';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/package" element={<Package />} />
        <Route path="/faq" element={<Question />} />
      </Routes>
    </Router>
  );
}

export default App;
