import { User } from "./user";

export interface LoginResponse {
    bearerToken: string;
    user: User;
}