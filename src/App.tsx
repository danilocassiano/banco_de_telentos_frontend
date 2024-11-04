import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function App() {  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="h-screen">
      <ToastContainer />
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
