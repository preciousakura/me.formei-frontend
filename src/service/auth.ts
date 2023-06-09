import { Student } from "User";
import api from "./config/api";
import { callService } from "./config/service";

const service = () => {
  const resource = "auth";

  async function postStudent(value: Student) {
    const path = `${resource}/signup/student`;

    const response = await callService(() => api.post(path, value));

    return response;
  }

  return { postStudent };
};

export const auth = service();
