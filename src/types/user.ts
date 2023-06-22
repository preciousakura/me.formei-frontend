declare module "User" {
  interface User {
    isAdmin: boolean;
    token: string;
    user: {
      adminId: string;
      city: string;
      email: string;
      id: string;
      lastname: string;
      name: string;
      state: string;
      username: string;
    };
  }

  interface UserLogin {
    username: string;
    password: string;
  }

  interface AccountInfo {
    name: string;
    lastname: string;
    username: string;
    email: string;
    registration: string;
    password: string;
    passwordConfirmation: string;
  }

  interface GeneralInformation {
    state: string;
    city: string;
    university: string;
    course: string;
    currentSemester: number;
    enrollmentSemester: number;
    enrollmentYear: number;
  }
  
  type Student = AccountInfo & GeneralInformation;

  interface AdminParam {
    id: string;
  }

  interface AdminInfo {
    id: String;
    email: String;
    lastname: String;
    name: String;
    username: String;
  }

  


  
}
