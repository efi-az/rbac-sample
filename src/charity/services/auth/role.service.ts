import { PermissionEntity } from './../../entities/auth/permission.entity';
import { PermissionService } from './permission.service';
import { assignRoleToPermissionDto, CreateRoleDto } from './../../dtos/role.dto';
import { RolesEntity } from './../../entities/auth/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm'

@Injectable()
export class RoleService {
    constructor(@InjectRepository(RolesEntity) private readonly roleRep: Repository<RolesEntity>,
    @InjectRepository(PermissionEntity) private readonly permissionRep: Repository<PermissionEntity>) {}

    async createRole(createRoleDto: CreateRoleDto): Promise<CreateRoleDto> {
        const findRole = await this.roleRep.findOne({name: createRoleDto.name})
        if (findRole) throw new ConflictException()

        const role = new RolesEntity()
        role.name = createRoleDto.name
        const savedRole = await this.roleRep.save(role)

        return savedRole
    }

    async findOne(conditions: any): Promise<RolesEntity> {
        return await this.roleRep.findOne(conditions)
    }

    async findAllRolesName(): Promise<string[]> {
        const roles = []
        const findRole = await this.roleRep.find({relations: ['permissions']})
        for (const role of findRole) {
            roles.push({[role.name]: role.permissions.map((item) => item.name)})
        }

        return roles
    }

    async assignPermission(assignPermission: assignRoleToPermissionDto): Promise<any> {
        const findRole = await this.roleRep.findOne({where: {name: assignPermission.role}, relations: ['permissions']})
        if(!findRole) throw new NotFoundException()
        
        const findPermission = await this.permissionRep.findOne({where: {name: assignPermission.permission}, relations: ['role']})
        if (!findPermission) throw new NotFoundException()

        findRole.permissions.push(findPermission)
        await this.roleRep.save(findRole)

        findPermission.role = findRole
        await this.permissionRep.save(findPermission)

        return {
            result: true
        }
    }
}