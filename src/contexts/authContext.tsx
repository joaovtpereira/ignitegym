import { UserDTO } from "@dtos/UserDTO";
import { api } from "@services/api";
import {
  clearStorageToken,
  storageTokenGet,
  storageTokenSave,
} from "@storage/storageAuthToken";
import {
  clearStorageUser,
  storageUserGet,
  storageUserSave,
} from "@storage/storageUser";
import { createContext, ReactNode, useEffect, useState } from "react";

export type AuthContextDataProps = {
  user: UserDTO;
  isLoadingUserStorageData: boolean;
  signIn: (email: string, password: string) => void;
  signOut: () => Promise<void>;
};

type AuthContextPRoviderPRops = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextPRoviderPRops) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserStorageData] =
    useState(true);

  async function UserAndTokenUpdate(userData: UserDTO, token: string) {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUser(userData);
    } catch (error) {
      throw error;
    }
  }

  async function UserAndTokenStorageData(userData: UserDTO, token: string) {
    try {
      await storageUserSave(userData);
      await storageTokenSave(token);
    } catch (error) {
      throw error;
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post("/sessions", { email, password });

      if (data.user && data.token) {
        setIsLoadingUserStorageData(true);

        await UserAndTokenStorageData(data.user, data.token);

        await UserAndTokenUpdate(data.user, data.token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserStorageData(true);
      setUser({} as UserDTO);
      await clearStorageUser();
      await clearStorageToken();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  async function loadUserData() {
    try {
      setIsLoadingUserStorageData(true);
      const userLogged = await storageUserGet();
      const userLoggedtoken = await storageTokenGet();

      if (userLogged && userLoggedtoken) {
        UserAndTokenUpdate(userLogged, userLoggedtoken);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserStorageData(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoadingUserStorageData,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
