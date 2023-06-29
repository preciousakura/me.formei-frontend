import { useMemo, useState, useEffect } from "react";
import { university } from "../service/universities";
import { DisciplineByPeriod } from "Discipline";
import { useUser } from "../hooks/useUser";

export function useDisciplines() {
  const [data, setData] = useState<DisciplineByPeriod>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string[]>();

  const { user } = useUser();

  useEffect(() => {
    setLoading(true);
    university
      .getDisciplines(user?.user.university.id, user?.user.curriculumId)
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [user]);

  return useMemo(() => ({ loading, error, data }), [loading, error, data]);
}
