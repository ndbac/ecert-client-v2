export interface IEmailSend {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
  option: EEmailOption;
  type: EEmailType;
}

export enum EEmailOption {
  HTML = "html",
  TEXT = "text",
}

export enum EEmailType {
  RESET_PASSWORDS = "reset-password",
  VERIFICATION_ACCOUNT = "verification-account",
  NOTIFICATION = "notification",
}

export interface NotificationState {
  emailSent: boolean;
  loading: boolean;
  serverErr: string | undefined;
}
