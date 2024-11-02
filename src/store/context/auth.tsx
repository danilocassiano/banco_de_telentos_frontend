import { createContext, useState } from "react";

export const authContext = createContext<IValue>({} as IValue)

interface IValue {
    isAutenticated: () => boolean
}

type TProps = {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: TProps) => {
    const [token, ] = useState<string>('')

    const isAutenticated = (): boolean => !!token
    
    const value = {
        isAutenticated
    }

    return (
        <authContext.Provider value={value}>
            {children}
        </authContext.Provider>
    )
}