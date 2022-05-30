/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUploadCertificationRes {
  data: string;
  subject: string;
  name: string;
  email: string;
  qrCode: string;
  signature: string;
  userId: string;
  _id: string;
}

export interface CertState {
  uploadCert: IUploadCertificationRes;
  isCreated: boolean;
  loading: boolean;
  serverErr: string;
}

export interface IUploadCertificationReq {
  data: string;
  subject: string;
  name: string;
  email: string;
  file: any;
}

export interface IGetCertificationReq {
  signature: string | string[] | undefined;
}
