import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'; 


async function login(username: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    const { token } = response.data;

   
    localStorage.setItem('token', token);

    return token;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
}


function getToken() {
  return localStorage.getItem('token');
}


axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export const backendService = {
  login,
};

async function createUser(){

}
