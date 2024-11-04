import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import { AuthProvider } from './store/context/auth';
import Dashboard from './pages/dashboard';
import CreateUser from './components/forms/users/UserForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard/create-user',
        element: <CreateUser />
      }
    ]
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
