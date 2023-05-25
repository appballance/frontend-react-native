export interface IServicePost {
  token: string;
  body: {};
  isAuth: Boolean;
}

export interface IAuthenticateUser {
  email: string;
  password: string;
}
