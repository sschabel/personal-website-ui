export class LoginRequest {

    username: string;
    password: string;
    reCaptchaToken: string;

    constructor(username: string, password: string, reCaptchaToken: string){
        this.username = username;
        this.password = password;
        this.reCaptchaToken = reCaptchaToken;
    }
}