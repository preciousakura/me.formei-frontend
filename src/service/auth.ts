import { Student, UserLogin } from "User";
import api from "./config/api";
import { callService } from "./config/service";

const service = () => {
  const resource = "auth";

  async function postStudent(value: Student) {
    const path = `${resource}/signup/student`;

    const response = await callService(() => api.post(path, value));

    return response;
  }

  async function signin(value: UserLogin) {
    const path = `${resource}/signin`;
    const response = await callService(() => api.post(path, value));
    return response;
  }

  return { postStudent, signin };
};

export const auth = service();
