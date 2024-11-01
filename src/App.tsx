import { useState } from 'react';
import Login from './pages/login';
import Navbar from './pages/navbar';
import Sidebar from './pages/sidebar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado de visibilidade da Sidebar

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Função para alternar a visibilidade da Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-screen">
      {isAuthenticated ? (
        <div className="flex h-full">
          {isSidebarOpen && <Sidebar />} {/* Condicional para exibir a Sidebar */}

          <div className="flex-1 flex flex-col">
            {/* Passa a função toggleSidebar para o Navbar */}
            <Navbar toggleSidebar={toggleSidebar} />

            <main className="flex-grow p-6">
              <div className="text-center text-gray-500">Conteúdo da Página</div>
            </main>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
