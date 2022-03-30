import { RolesEntity } from './../../charity/entities/auth/role.entity';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: RolesEntity[]) => import("@nestjs/common").CustomDecorator<string>;
