export interface IUserLogin {
    email: string,
    password: string
}

export interface IRegisterUser {
    email ?:string,
    password ?: string;
    first_name : string,
    last_name : string,
    country  : string,
    city : string,
    dob : string,
    profession : string,
    office_name : string,
    education : string,
    image ?: string,
    height?:  string;
    website?: string;
    twitter_link?: string;
    linkedin_link?: string;
    biography ?: [
        {
            title : string,
            description : string
        },
        {
            title : string,
            description : string
        }
    ]
}

export interface ICheckEmailExists {
    email: string
}

export interface IVerifyOtp {
    code: string;
    token: string
}

export interface IResetPassword {
    password: string;
    confirmPassword: string;
    token: string
}

export interface IForgotPassword {
    email: string;
}

export interface IChangePassword {
    otp: string;
    token: string
}

export interface IVerifyRecaptcha {
    token: string
}

export interface IFileUpload {
    image: any
}