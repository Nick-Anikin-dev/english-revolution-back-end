import { RolesEnum } from "../constants/roles/roles.enum";
export declare class User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    username: string;
    role_type: RolesEnum;
    user_role_id: number;
}
