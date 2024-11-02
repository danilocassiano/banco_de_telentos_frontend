import { useState, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../navbar';
import Sidebar from '../sidebar';

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-full">
      {isSidebarOpen && <Sidebar />}
      
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        
        <main className="flex-grow p-6">
          <Routes>
            <Route 
              path="/" 
              element={<div>Home Content</div>} 
            />
            <Route 
              path="/dashboard" 
              element={
                <Suspense fallback={<div>Carregando...</div>}>
                  <div>Em Manutenção</div>
                </Suspense>
              } 
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default Home;
