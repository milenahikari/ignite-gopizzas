import React, { createContext, useContext, ReactNode } from "react";

type AutContextData = {};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AutContextData);

function AuthProvider({ children }: AuthProviderProps) {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
