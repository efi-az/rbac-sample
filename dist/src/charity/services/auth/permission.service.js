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
exports.PermissionService = void 0;
const permission_entity_1 = require("./../../entities/auth/permission.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PermissionService = class PermissionService {
    constructor(permissionRep) {
        this.permissionRep = permissionRep;
    }
    async createPermission(createPermissionDto) {
        const findPermission = await this.permissionRep.findOne({ name: createPermissionDto.name });
        if (findPermission)
            throw new common_1.ConflictException();
        const permission = new permission_entity_1.PermissionEntity();
        permission.name = createPermissionDto.name;
        permission.access = createPermissionDto.access;
        const savedPermission = await this.permissionRep.save(permission);
        return savedPermission;
    }
    async findOne(conditions) {
        return await this.permissionRep.findOne(conditions);
    }
    async findAllPermissionsName() {
        const permissions = [];
        const findPermission = await this.permissionRep.find();
        for (const permission of findPermission) {
            permissions.push({ [permission.name]: permission.access });
        }
        return permissions;
    }
};
PermissionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(permission_entity_1.PermissionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PermissionService);
exports.PermissionService = PermissionService;
//# sourceMappingURL=permission.service.js.map