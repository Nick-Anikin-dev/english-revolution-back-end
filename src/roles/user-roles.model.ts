import { Column, Entity } from "typeorm";


@Entity({name: 'user_roles'})
export class UserRoles {

    @Column()
    id: number;


    @Column()
    roleId: number;

    @Column()
    userId: number;

}
