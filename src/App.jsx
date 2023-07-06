import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContentGeneration from './pages/Content';
import College_Course from './pages/College_Course';
import Skills from './pages/Skills';
import TopCompanies from './pages/Top_Companies';
import ScopeNFuture from './pages/Scope_Future';
import OtherTools from './pages/OtherTools';
import Listings from './pages/Listings';
import Expectations from './pages/Expectations';
import Footer from './components/Footer'; // Import the Footer component
import Services from './pages/Services';
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/content" element={<ContentGeneration />} />
          <Route path="/college-courses" element={<College_Course />} />
          <Route path="scope-future" element={<ScopeNFuture />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/top-companies" element={<TopCompanies />} />
          <Route path="/other-tools" element={<OtherTools />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/expectations" element={<Expectations />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
