import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="h-screen">
      <Router>
        {isAuthenticated ? (
          <Routes>
            <Route path="/*" element={<Home />} />
          </Routes>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </Router>
    </div>
  );
}

export default App;
