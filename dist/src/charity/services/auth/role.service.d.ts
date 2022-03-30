import { PermissionEntity } from './../../entities/auth/permission.entity';
import { assignRoleToPermissionDto, CreateRoleDto } from './../../dtos/role.dto';
import { RolesEntity } from './../../entities/auth/role.entity';
import { Repository } from 'typeorm';
export declare class RoleService {
    private readonly roleRep;
    private readonly permissionRep;
    constructor(roleRep: Repository<RolesEntity>, permissionRep: Repository<PermissionEntity>);
    createRole(createRoleDto: CreateRoleDto): Promise<CreateRoleDto>;
    findOne(conditions: any): Promise<RolesEntity>;
    findAllRolesName(): Promise<string[]>;
    assignPermission(assignPermission: assignRoleToPermissionDto): Promise<any>;
}
