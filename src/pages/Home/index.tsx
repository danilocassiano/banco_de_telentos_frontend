import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import Dashboard from '../dashbord/index';
import CreateUser from '../../components/forms/users/UserForm'; // Certifique-se de que o caminho está correto

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isCreateUserFormVisible, setIsCreateUserFormVisible] = useState(false); // Novo estado
  const [isDashboardVisible, setIsDashboardVisible] = useState(true); // Estado para controlar a visibilidade do Dashboard

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleCreateUserClick = () => {
    setIsCreateUserFormVisible(true); // Abre o formulário ao clicar
    setIsDashboardVisible(false); // Fecha o Dashboard
  };

  const handleCloseCreateUserForm = () => {
    setIsCreateUserFormVisible(false); // Fecha o formulário
    setIsDashboardVisible(true); // Reabre o Dashboard
  };

  return (
    <div className="flex h-screen">
      {isSidebarOpen && <Sidebar onCreateUserClick={handleCreateUserClick} />}

      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="flex-grow p-6 overflow-auto">
          <Routes>
            {/* Renderiza o Dashboard apenas se estiver visível */}
            {isDashboardVisible && <Route path="/" element={<Dashboard />} />}
          </Routes>

          {/* Condicionalmente renderiza o formulário de criação de usuário */}
          {isCreateUserFormVisible && <CreateUser onClose={handleCloseCreateUserForm} />}
        </main>
      </div>
    </div>
  );
}

export default Home;
