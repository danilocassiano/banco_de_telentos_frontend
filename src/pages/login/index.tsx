import { useEffect, useState } from 'react';

function Login() {
  // Lista das imagens de fundo
  const images = [
    'src/assets/login_1.jpg',
    'src/assets/login_2.jpg',
    'src/assets/login_3.jpg',
    'src/assets/login_4.jpg'
  ];

  // Estado para armazenar a imagem de fundo atual
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Seleciona uma imagem aleatória ao carregar a página
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setBackgroundImage(randomImage);
  }, []);

  return (
    <div
      className="h-screen w-screen flex flex-col md:flex-row overflow-hidden m-0 p-0"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Contêiner de Login */}
      <div className="flex flex-col justify-center items-center bg-white bg-opacity-30 w-full h-full md:w-1/4 p-8 md:p-12">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="src/assets/img login.png" alt="Logo da Empresa" className="h-16" />
        </div>        

        {/* Formulário de Login */}
        <form className="space-y-4 w-full px-4">
          {/* Username/Email */}
          <div>
            <label htmlFor="username" className="block text-white">Usuário / Email</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu usuário ou e-mail"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-white">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
          </div>

          {/* Botão de Login */}
          <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            ENTRAR
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
