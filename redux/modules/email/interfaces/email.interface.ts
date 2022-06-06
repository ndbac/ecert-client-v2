export interface EmailState {
  isSent: boolean;
  loading: boolean;
  serverErr: string | undefined;
}

export interface ISendCertiToEmailReq {
  email: string;
  signature: string;
}
