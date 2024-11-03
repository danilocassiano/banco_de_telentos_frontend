import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import { AuthProvider } from './store/context/auth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
      
  )
}

export default App;
