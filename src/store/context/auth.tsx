import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { IUser } from "../../types/user";

export const authContext = createContext<IValue>({} as IValue)

interface IValue {
    isAutenticated: () => boolean,
    createToken: (token: string, user: IUser) => void,
    logout: () => void
    token: string
    user: IUser
}

type TProps = {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: TProps) => {
    const [cookies, setCookie] = useCookies()
    const [token, setToken] = useState<string>(cookies['token'])
    const [user, setUser] = useState<IUser>({} as IUser)

    const isAutenticated = (): boolean => !!token

    

    const createToken = (token: string, user: IUser) => {
        console.log(user)
        setCookie('token', token)
        setToken(token)
        setUser(user)
        setCookie('user', JSON.stringify(user))
        
    }

    const logout = () => {
        setCookie('token', '')
        setToken('')
        setUser({} as IUser)
        setCookie('user', '')
    }

    useEffect(() => {
        const localToken = cookies['token']

        if(localToken){
            // const user = JSON.parse(cookies['user']);            
            return createToken(token, user)
        }          

        logout()
    }, [token])  

   

    const value: IValue = {
        isAutenticated,
        createToken,
        logout,
        token,
        user
    }

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}