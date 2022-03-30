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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicStorageService = void 0;
const permission_service_1 = require("./charity/services/auth/permission.service");
const role_service_1 = require("./charity/services/auth/role.service");
const common_1 = require("@nestjs/common");
let DynamicStorageService = class DynamicStorageService {
    constructor(roleService, permissionService) {
        this.roleService = roleService;
        this.permissionService = permissionService;
    }
    async getRbac() {
        const roles = await this.roleService.findAllRolesName();
        const per = await this.permissionService.findAllPermissionsName();
        var permissions = {};
        per.forEach(item => {
            for (const [key, value] of Object.entries(item)) {
                permissions[key] = value;
            }
        });
        var grants = {};
        roles.forEach(item => {
            for (const [key, value] of Object.entries(item)) {
                grants[key] = value;
            }
        });
        const RBACstorage = {
            roles: roles.flatMap(Object.keys),
            permissions,
            grants,
            filters: {}
        };
        return RBACstorage;
    }
};
DynamicStorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [role_service_1.RoleService, permission_service_1.PermissionService])
], DynamicStorageService);
exports.DynamicStorageService = DynamicStorageService;
//# sourceMappingURL=dynamic-storage.service.js.map