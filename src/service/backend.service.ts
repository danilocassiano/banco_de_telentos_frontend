import axios from 'axios';

const API_URL = 'http://localhost:3000/auth'; 


async function login(username: string, password: string) {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    const { token } = response.data;

    return token;
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
}


function getToken(name='token') {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; token=${name}`) ?? [];
  if (parts?.length === 2) return parts.pop?.().split(';').shift();
  return null;
}


axios.interceptors.request.use((config) => {
  const token = getToken();
  if (token)
    config.headers['Authorization'] = `Bearer ${token}`;
  

  return config;
});

async function createUser(){

}

export const backendService = {
  login,
  createUser
};
