import { RolesEnum } from "../../constants/roles/roles.enum";
export interface AuthUser {
    id: number;
    email: string;
    role: RolesEnum;
}
