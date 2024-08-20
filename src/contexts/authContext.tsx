import { UserDTO } from "@dtos/UserDTO";
import { createContext, ReactNode } from "react";

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
  return (
    <AuthContext.Provider
      value={{
        user: {
          name: "Joao",
          id: "1",
          email: "joao@gmail.com",
          avatar: "https://github.com/joaovtpereira.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
