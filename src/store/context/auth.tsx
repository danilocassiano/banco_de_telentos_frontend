import { createContext, useEffect, useState } from "react";

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
    const [token, setToken] = useState<string>('dvcsdvs')

    const isAutenticated = (): boolean => !!token
    const createToken = (token: string) => {
        localStorage.setItem('token', token)
        setToken(token)
    }

    const logout = () => {
        localStorage.setItem('token', '')
        setToken('')
    }

    useEffect(() => {
        const localToken = localStorage.getItem('token')

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