export interface IAccount {
  email: string;
  name: string;
  bio: string;
  active: boolean;
  verify: boolean;
  photoUrl: string;
  namespace: string;
  createdAt: string;
}
export interface IAccountState {
  user: IAccount;
  loading: boolean;
  serverErr: string | undefined;
}
