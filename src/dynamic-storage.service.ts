import { PermissionService } from './charity/services/auth/permission.service';
import { RoleService } from './charity/services/auth/role.service';
import { RolesEntity } from './charity/entities/auth/role.entity';
import { IDynamicStorageRbac, IStorageRbac, RBAC_REQUEST_FILTER } from "nestjs-rbac";
import { Injectable } from '@nestjs/common';


@Injectable()
export class DynamicStorageService implements IDynamicStorageRbac {
    constructor(private readonly roleService: RoleService, private readonly permissionService: PermissionService) {}
    async getRbac(): Promise<IStorageRbac> {
        const roles = await this.roleService.findAllRolesName()
        const per = await this.permissionService.findAllPermissionsName()

        var permissions = {}

        per.forEach(item => {
            for (const [key, value] of Object.entries(item)) {
                permissions[key] = value
            }
        })

        // ---------------------------------

        var grants = {}

        roles.forEach(item => {
            for (const [key, value] of Object.entries(item)) {
                grants[key] = value
                
            }
        })


        const RBACstorage: IStorageRbac = {
            roles: roles.flatMap(Object.keys),
            permissions,
            grants,
            filters: {}
        };


          return RBACstorage
    }
}