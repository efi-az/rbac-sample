import { PermissionEntity } from './../../entities/auth/permission.entity';
import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { CreatePermissionDto } from 'src/charity/dtos/permission.dto';

@Injectable()
export class PermissionService {
    constructor(@InjectRepository(PermissionEntity) private readonly permissionRep: Repository<PermissionEntity>) {}

    async createPermission(createPermissionDto: CreatePermissionDto): Promise<CreatePermissionDto> {
        const findPermission = await this.permissionRep.findOne({name: createPermissionDto.name})
        if (findPermission) throw new ConflictException()

        const permission = new PermissionEntity()
        permission.name = createPermissionDto.name
        permission.access = createPermissionDto.access
        const savedPermission = await this.permissionRep.save(permission)

        return savedPermission
    }

    async findOne(conditions: any): Promise<PermissionEntity> {
        return await this.permissionRep.findOne(conditions)
    }

    async findAllPermissionsName(): Promise<string[]> {
        const permissions = []
        const findPermission = await this.permissionRep.find()
        for (const permission of findPermission) {
            permissions.push({[permission.name]: permission.access})
        }

        return permissions
    }
}