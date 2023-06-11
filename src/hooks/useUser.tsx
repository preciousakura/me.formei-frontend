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
  handleUser: (u: User) => void;
  isAdmin: boolean;
  isLoggedIn: boolean;
  loading: boolean;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = async () => {
    setLoading(true);
    await userSave
      .get()
      .then((user) => {
        if (user) {
          setIsLoggedIn(true);
          setUser(user);
        }
      })
      .finally(() => setLoading(false));
  };

  const handleUser = async (user: User) => {
    const u = {
      isAdmin: user.isAdmin,
      token: user.token,
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
    await userSave.set(u);
  };

  const isAdmin = useMemo(() => {
    return user ? user.isAdmin : false;
  }, [user]);

  const providerValue = useMemo(
    () => ({
      user,
      handleUser,
      isAdmin,
      isLoggedIn,
      loading,
    }),
    [user, isAdmin, isLoggedIn, loading]
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
