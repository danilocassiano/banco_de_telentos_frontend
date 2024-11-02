import { FC } from 'react';

interface NavbarProps {
  toggleSidebar: () => void; 
}

const Navbar: FC<NavbarProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between p-4">
        {/* Botão para abrir/fechar a Sidebar */}
        <button onClick={toggleSidebar} className="p-2 text-gray-600 hover:text-blue-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        {/* Barra de pesquisa */}
        <div className="flex-grow flex justify-center">
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="w-full px-10 py-2 border rounded-full shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Ícones do lado direito */}
        <div className="flex items-center space-x-4 mr-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <div className="flex flex-col items-center">
            <span className="text-gray-600 font-bold">Micaela Eloyse</span>
            <span className="text-gray-400 text-sm">RH</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
