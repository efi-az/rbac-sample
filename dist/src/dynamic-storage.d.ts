import { RoleService } from 'src/charity/services/auth/role.service';
import { IDynamicStorageRbac, IStorageRbac } from "nestjs-rbac";
export declare class DynamicStorageService implements IDynamicStorageRbac {
    private readonly roleService;
    constructor(roleService: RoleService);
    getRbac(): Promise<IStorageRbac>;
}
