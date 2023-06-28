import { useMemo, useState } from "react";
import { auth } from "../service/auth";
import { Student } from "User";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string[]>();

  function postStudent(data: Student, toHome: (user: any) => void) {
    setLoading(true);
    auth
      .postStudent(data)
      .then(() => toHome(error))
      .catch((error) =>
        error.response
          ? setError(error.response.data.message)
          : setError(error.message)
      )
      .finally(() => {
        setLoading(false);
      });
  }

  return useMemo(() => ({ loading, error, postStudent }), [loading, error]);
}
