import axios from 'axios';
import { ICreateUserDto, IUser } from '../types/user';

const http = axios.create({
  baseURL: "https://banco-de-telentos-backend.onrender.com/",
  withCredentials: true,
})

async function login(username: string, password: string):Promise<{token: string, user: IUser}> {
  try {
    const response = await http.post("/auth/login", { username, password });
    return response.data;
    
  } catch (error) {
    console.error('Erro no login:', error);
    throw error;
  }
}


// function getToken(name='token') {
//   const value = `; ${document.cookie}`;
//   const parts = value.split(`; token=${name}`) ?? [];
//   if (parts?.length === 2) return parts.pop?.().split(';').shift();
//   return null;
// }


// axios.interceptors.request.use((config) => {
//   const token = getToken();
//   if (token)
//     config.headers['Authorization'] = `Bearer ${token}`;
  

//   return config;
// });



async function createUser(newUser: ICreateUserDto): Promise<void> {
  try {
      await http.post('/users', newUser);            
  } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
  }
}

export const backendService = {
  login,
  createUser,
};
