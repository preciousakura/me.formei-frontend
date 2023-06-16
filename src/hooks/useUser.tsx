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
  deleteUser: (toBack: () => void) => void;
  loading: boolean;
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkLoggedIn();
  }, [user]);

  const checkLoggedIn = async () => {
    await userSave.get().then((user) => {
      if (user) setUser(user);
    });
  };

  const deleteUser = async (toBack: () => void) => {
    setLoading(true);
    userSave
      .delete()
      .then(() => {
        setUser(undefined);
        toBack();
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

  const providerValue = useMemo(
    () => ({
      user,
      handleUser,
      loading,
      deleteUser,
    }),
    [user, loading]
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
