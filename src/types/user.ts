declare module "User" {
  interface UserLogin {
    user: string;
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
}
