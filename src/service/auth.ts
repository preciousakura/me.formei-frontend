import { Student, User, UserLogin } from "User";
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
    const response = await callService(() => api.post<User>(path, value));
    return response;
  }

  async function session() {
    const path = `${resource}/session`;
    const response = await callService(() => api.get<boolean>(path));
    return response.data;
  }

  return { postStudent, signin, session };
};

export const auth = service();
