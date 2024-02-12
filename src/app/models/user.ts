import { AuthorityEnum } from "./authority.enum";

export interface User {
    username: string;
    authorities: AuthorityEnum[];
}