import { useMemo, useState } from "react";
import { auth } from "../service/auth";
import { UserLogin } from "User";
import { useUser } from "../hooks/useUser";

export function useSignin() {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const { handleUser, handleToken } = useUser();

  function signin(data: UserLogin, toHome: () => void) {
    setLoading(true);
    auth
      .signin(data)
      .then((res) => {
        setData(res.data);
        handleUser(res.data);
        handleToken(res.data.token);
        toHome();
      })
      .catch((error) => setError(error.response.data.message))
      .finally(() => setLoading(false));
  }

  const isUserError = useMemo(() => {
    return error && error === "User not found.";
  }, [error]);

  const isPasswordError = useMemo(() => {
    return error && error === "Password does not match.";
  }, [error]);

  const isGenericError = useMemo(() => {
    return error && !isUserError && !isPasswordError;
  }, [error]);

  return useMemo(
    () => ({
      data,
      loading,
      error,
      signin,
      isUserError,
      isPasswordError,
      isGenericError,
    }),
    [data, loading, error, isUserError, isPasswordError, isGenericError]
  );
}
