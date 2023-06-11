import { useMemo, useState } from "react";
import { auth } from "../service/auth";
import { Student } from "User";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string[]>();

  function postStudent(data: Student) {
    setLoading(true);
    auth
      .postStudent(data)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }

  return useMemo(() => ({ loading, error, postStudent }), [loading, error]);
}
