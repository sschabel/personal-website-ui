import { User } from "./user";

export interface LoginResponse {
    bearerToken: string;
    errorMessage: string;
    user: User;
}