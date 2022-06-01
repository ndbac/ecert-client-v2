export interface IVerifyAccountState {
  status: string;
  serverErr: string | undefined;
  loading: boolean;
}
export interface IVerifyData {
  tokenId: string | string[];
  loginToken: string;
}
