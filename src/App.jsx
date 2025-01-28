import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

const App = () => {
  return (
      <Router>
          <div>
              <main>
                  <Routes>
                      {/* Set Login as the first page (root path) */}
                      <Route path="/" element={<Login />} />
                  </Routes>
              </main>
          </div>
      </Router>
  );
};

export default App;
