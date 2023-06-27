import { Student } from "User";
import api from "./config/api";
import { callService } from "./config/service";
import { Courses, Universities } from "University";
import { ensureAxiosParamOptions } from "../utils/params";

type UniversitiesProps = {
  state?: string;
  city?: string;
};

const service = () => {
  const resource = "universities";

  async function getUniversities({ state, city }: UniversitiesProps) {
    const path = `${resource}`;
    const options = ensureAxiosParamOptions({
      params: {
        state,
        city,
      },
    });
    const response = await callService(() =>
      api.get<Universities>(path, options)
    );

    return response.data;
  }

  async function getCourses(id: string) {
    const path = `${resource}/${id}/courses`;
    const response = await callService(() => api.get<Courses[]>(path));
    return response.data;
  }

  async function postStudent(value: Student) {
    const path = `${resource}/signup/student`;

    const response = await callService(() => api.post(path, value));

    return response;
  }

  return { postStudent, getUniversities, getCourses };
};

export const university = service();
