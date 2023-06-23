import { useMemo, useState, useEffect } from "react";
import { auth } from "../service/auth";

export function useSession() {
  const [session, setSession] = useState<boolean>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string[]>();

  useEffect(() => {
    setLoading(true);
    auth
      .session()
      .then((res) => {
        setSession(res);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return useMemo(
    () => ({ loading, error, session }),
    [loading, error, session]
  );
}
