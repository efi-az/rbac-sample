import { PermissionEntity } from './permission.entity';
import { UserEntity } from './../user/user.entity';
export declare class RolesEntity {
    id: number;
    name: string;
    users: UserEntity[];
    permissions: PermissionEntity[];
}
