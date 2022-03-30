import { PermissionService } from './charity/services/auth/permission.service';
import { RoleService } from './charity/services/auth/role.service';
import { IDynamicStorageRbac, IStorageRbac } from "nestjs-rbac";
export declare class DynamicStorageService implements IDynamicStorageRbac {
    private readonly roleService;
    private readonly permissionService;
    constructor(roleService: RoleService, permissionService: PermissionService);
    getRbac(): Promise<IStorageRbac>;
}
