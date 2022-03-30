import { RolesEntity } from './role.entity';
export declare class PermissionEntity {
    id: number;
    name: string;
    access: string;
    role: RolesEntity;
}
