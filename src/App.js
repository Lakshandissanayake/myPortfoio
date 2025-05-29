import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mobile from './components/Mobile';
import PC from './components/PC';
import Home from './components/home'; // We'll move your current main content into Home.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/pc" element={<PC />} />
      </Routes>
    </Router>
  );
}

export default App;
