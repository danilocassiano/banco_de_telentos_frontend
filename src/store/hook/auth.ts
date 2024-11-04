import { useContext } from "react";
import { authContext } from "../context/auth";

export function useAuth(){
    return useContext(authContext)
}