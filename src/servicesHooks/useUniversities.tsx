import { useMemo, useState, useEffect } from "react";
import { University } from "University";
import { university } from "../service/universities";

export function useUniversity() {
  const [data, setData] = useState<University[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string[]>();

  useEffect(() => {
    setLoading(true);
    university
      .getUniversities()
      .then((res) => setData(res.universities))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
}