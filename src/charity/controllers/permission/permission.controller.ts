import { CreatePermissionDto } from './../../dtos/permission.dto';
import { PermissionService } from './../../services/auth/permission.service';
import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";

@Controller('permission')
export class PermissionController {
    constructor(private permissionService: PermissionService) {}

    @Post()
    async createPermission(@Body(ValidationPipe) createPermissionDto: CreatePermissionDto): Promise<CreatePermissionDto> {
        return await this.permissionService.createPermission(createPermissionDto)
    }
}