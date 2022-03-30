"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const permission_entity_1 = require("./../../entities/auth/permission.entity");
const role_entity_1 = require("./../../entities/auth/role.entity");
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
let RoleService = class RoleService {
    constructor(roleRep, permissionRep) {
        this.roleRep = roleRep;
        this.permissionRep = permissionRep;
    }
    async createRole(createRoleDto) {
        const findRole = await this.roleRep.findOne({ name: createRoleDto.name });
        if (findRole)
            throw new common_1.ConflictException();
        const role = new role_entity_1.RolesEntity();
        role.name = createRoleDto.name;
        const savedRole = await this.roleRep.save(role);
        return savedRole;
    }
    async findOne(conditions) {
        return await this.roleRep.findOne(conditions);
    }
    async findAllRolesName() {
        const roles = [];
        const findRole = await this.roleRep.find({ relations: ['permissions'] });
        for (const role of findRole) {
            roles.push({ [role.name]: role.permissions.map((item) => item.name) });
        }
        return roles;
    }
    async assignPermission(assignPermission) {
        const findRole = await this.roleRep.findOne({ where: { name: assignPermission.role }, relations: ['permissions'] });
        if (!findRole)
            throw new common_1.NotFoundException();
        const findPermission = await this.permissionRep.findOne({ where: { name: assignPermission.permission }, relations: ['role'] });
        if (!findPermission)
            throw new common_1.NotFoundException();
        findRole.permissions.push(findPermission);
        await this.roleRep.save(findRole);
        findPermission.role = findRole;
        await this.permissionRep.save(findPermission);
        return {
            result: true
        };
    }
};
RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.RolesEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(permission_entity_1.PermissionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RoleService);
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map