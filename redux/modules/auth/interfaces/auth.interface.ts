import { IamNamespace } from "../../common/common.interface";

export interface IIamUser {
  id: string;
  token: {
    access_token: string;
    expires_in: Date;
  };
}

export interface AuthState {
  userAuth: IIamUser;
  loading: boolean;
  registered: boolean;
  serverErr: string | undefined;
}

export interface IUserRegister {
  email: string;
  namespace: IamNamespace;
  password: string;
  name: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
