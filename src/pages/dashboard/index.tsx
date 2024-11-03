import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import { useAuth } from "../../store/hook/auth";
import { Outlet, useNavigate } from "react-router-dom";

export default function Dashboard(){
  const route = useNavigate()
   const { isAutenticated } = useAuth()
   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Estado de visibilidade da Sidebar

  // Função para alternar a visibilidade da Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
    useEffect(()=>{
      if(!isAutenticated()){
        route('/')
      }
    })
    


    return (
    <div className="flex h-full">
    {isSidebarOpen && <Sidebar />} {/* Condicional para exibir a Sidebar */}

    <div className="flex-1 flex flex-col">
        {/* Passa a função toggleSidebar para o Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="flex-grow p-6">
            <Outlet />
        </main>
        </div>
    </div>
  )

}