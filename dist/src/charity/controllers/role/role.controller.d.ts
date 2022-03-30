import { assignRoleToPermissionDto, CreateRoleDto } from './../../dtos/role.dto';
import { RoleService } from 'src/charity/services/auth/role.service';
export declare class RoleController {
    private roleService;
    constructor(roleService: RoleService);
    createRole(createRoleDto: CreateRoleDto): Promise<CreateRoleDto>;
    assignPermission(assignPermission: assignRoleToPermissionDto): Promise<any>;
}
