import { UserDTO } from "@dtos/UserDTO";
import { createContext, ReactNode, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
};

type AuthContextPRoviderPRops = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextPRoviderPRops) {
  const [user, setUser] = useState({
    name: "Joao",
    id: "1",
    email: "joao@gmail.com",
    avatar: "https://github.com/joaovtpereira.png",
  });

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
