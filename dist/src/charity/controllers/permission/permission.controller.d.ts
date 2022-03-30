import { CreatePermissionDto } from './../../dtos/permission.dto';
import { PermissionService } from './../../services/auth/permission.service';
export declare class PermissionController {
    private permissionService;
    constructor(permissionService: PermissionService);
    createPermission(createPermissionDto: CreatePermissionDto): Promise<CreatePermissionDto>;
}
