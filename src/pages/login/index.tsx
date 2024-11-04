import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backendService } from '../../service/backend.service';
import { useAuth } from '../../store/hook/auth';

function Login() {
  const navigate = useNavigate();
  const  { isAutenticated, createToken, token } = useAuth()
  const images = [
    'src/assets/image/login_1.jpg',
    'src/assets/image/login_2.jpg',
    'src/assets/image/login_3.jpg',
    'src/assets/image/login_4.jpg'
  ];

  const [backgroundImage, setBackgroundImage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);

    if(isAutenticated())
      navigate('/dashboard')
      console.log(token, isAutenticated());
      
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await backendService.login(username, password)
    .then(({token, user}) => { 
      createToken(token, user)

    })
    .catch(error => {
      console.error('Erro de login:', error);
      setErrorMessage('Credenciais inválidas. Tente novamente.');
    })
  };

  return (
    <div
      className="h-screen w-screen flex flex-col md:flex-row overflow-hidden m-0 p-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-30 w-full h-full md:w-1/4 p-8 md:p-12">
        
        <div className="flex justify-center mb-6">
          <img src="src/assets/image/img login.png" alt="Logo da Empresa" className="h-16" />
        </div>

        <form className="space-y-4 w-full px-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-white">Usuário / Email</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu usuário ou e-mail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
