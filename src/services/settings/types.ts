export interface IEmailVerifyCode { 
     code: string;
     token: string;
     email: string
}
export interface IChangePassword { 
     currentPassword: string;
     newPassword: string;
     repeatPassword: string
}