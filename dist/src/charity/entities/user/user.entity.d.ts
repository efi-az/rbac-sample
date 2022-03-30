import { RolesEntity } from './../auth/role.entity';
export declare class UserEntity {
    id: number;
    phone: string;
    password: string;
    role: RolesEntity;
}
