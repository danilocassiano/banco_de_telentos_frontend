import { useEffect, useState } from 'react';

//Imagens da tela de login
function Login() {
  const images = [
    'src/assets/image/login_1.jpg',
    'src/assets/image/login_2.jpg',
    'src/assets/image/login_3.jpg',
    'src/assets/image/login_4.jpg'
  ];

  const [backgroundImage, setBackgroundImage] = useState('');

  //Mudança da tela de login rondomicamente.

  useEffect(() => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
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
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
          </div>
          
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
