import { ValidationPipe } from '@nestjs/common';
import { assignRoleToPermissionDto, CreateRoleDto } from './../../dtos/role.dto';
import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { RoleService } from 'src/charity/services/auth/role.service';

@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {}
 
    @Post()
    async createRole(@Body(ValidationPipe) createRoleDto: CreateRoleDto): Promise<CreateRoleDto> {
        return await this.roleService.createRole(createRoleDto)
    }

    @Post('permission')
    async assignPermission(@Body(ValidationPipe) assignPermission: assignRoleToPermissionDto): Promise<any> {
        return await this.roleService.assignPermission(assignPermission)
    }
}