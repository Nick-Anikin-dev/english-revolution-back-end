import { RolesEnum } from "../../constants/roles/roles.enum";
export declare class SignUpDto {
    readonly email: string;
    readonly password: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly username: string;
    readonly role_type: RolesEnum;
}
