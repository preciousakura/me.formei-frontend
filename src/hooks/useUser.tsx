import { User } from "User";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { userSave } from "../utils/storange";

export interface IUserContext {
  user?: User;
  token?: string;
  handleUser: (u: User) => void;
  handleToken: (token: string) => void;
  isAdmin: boolean;
  isLoggedIn: boolean;
  loading: boolean;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    setLoading(true);
    await userSave
      .get()
      .then((token) => {
        if (token) {
          setToken(token);
          setIsLoggedIn(true);
        }
      })
      .finally(() => setLoading(false));
  };

  const handleUser = (user: User) => {
    const u = {
      isAdmin: user.isAdmin,
      user: {
        adminId: user.user.adminId,
        city: user.user.city,
        email: user.user.email,
        id: user.user.id,
        lastname: user.user.lastname,
        name: user.user.name,
        state: user.user.state,
        username: user.user.username,
      },
    };
    setUser(u);
  };

  const handleToken = async (token: string) => {
    setToken(token);
    await userSave.set(token);
  };

  const isAdmin = useMemo(() => {
    return user ? user.isAdmin : false;
  }, [user]);

  const providerValue = useMemo(
    () => ({
      user,
      token,
      handleUser,
      handleToken,
      isAdmin,
      isLoggedIn,
      loading,
    }),
    [user, token, isAdmin, isLoggedIn, loading]
  );
  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
