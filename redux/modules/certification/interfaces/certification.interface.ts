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
  createdAt: string;
  updatedAt: string;
}

export interface CertState {
  uploadCert: IUploadCertificationRes;
  certs: IUploadCertificationRes[];
  isCreated: boolean;
  loading: boolean;
  certSent: any;
  serverErr: string | undefined;
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
