import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

export const authContext = createContext<IValue>({} as IValue)

interface IValue {
    isAutenticated: () => boolean,
    createToken: (token: string) => void,
    logout: () => void
    token: string
}

type TProps = {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: TProps) => {
    const [cookies, setCookie] = useCookies()
    const [token, setToken] = useState<string>(cookies['token'])

    const isAutenticated = (): boolean => !!token

    const createToken = (token: string) => {
        setCookie('token', token)
        setToken(token)
    }

    const logout = () => {
        setCookie('token', '')
        setToken('')
    }

    useEffect(() => {
        const localToken = cookies['token']

        if(localToken)
           return createToken(token)

        logout()
    }, [token])

   

    const value: IValue = {
        isAutenticated,
        createToken,
        logout,
        token
    }

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}