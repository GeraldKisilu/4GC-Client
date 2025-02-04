import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Stock from './components/Stock';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginWithRedirect />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </div>
    </Router>
  );
};

// Simulating login and redirecting to Stock.jsx
const LoginWithRedirect = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate successful login
    navigate('/stock');
  };

  return (
    <div>
      <button onClick={handleLogin}>OOOO</button>
    </div>
  );
};

export default App;
