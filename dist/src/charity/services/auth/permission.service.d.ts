import { PermissionEntity } from './../../entities/auth/permission.entity';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from 'src/charity/dtos/permission.dto';
export declare class PermissionService {
    private readonly permissionRep;
    constructor(permissionRep: Repository<PermissionEntity>);
    createPermission(createPermissionDto: CreatePermissionDto): Promise<CreatePermissionDto>;
    findOne(conditions: any): Promise<PermissionEntity>;
    findAllPermissionsName(): Promise<string[]>;
}
