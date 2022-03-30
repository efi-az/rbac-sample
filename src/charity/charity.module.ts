import { PermissionEntity } from './entities/auth/permission.entity';
import { RoleController } from './controllers/role/role.controller';
import { RoleService } from 'src/charity/services/auth/role.service';
import { RolesEntity } from './entities/auth/role.entity';
import { UserEntity } from './entities/user/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user/user.service';
import { Module } from "@nestjs/common";
import { PermissionService } from './services/auth/permission.service';
import { PermissionController } from './controllers/permission/permission.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UserEntity, RolesEntity, PermissionEntity])],
    providers: [UserService, RoleService, PermissionService],
    controllers: [RoleController, PermissionController],
    exports: [UserService, RoleService, PermissionService]
})
export class CharityModule {

}