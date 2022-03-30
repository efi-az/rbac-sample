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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const role_dto_1 = require("./../../dtos/role.dto");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const role_service_1 = require("../../services/auth/role.service");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async createRole(createRoleDto) {
        return await this.roleService.createRole(createRoleDto);
    }
    async assignPermission(assignPermission) {
        return await this.roleService.assignPermission(assignPermission);
    }
};
__decorate([
    (0, common_2.Post)(),
    __param(0, (0, common_2.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "createRole", null);
__decorate([
    (0, common_2.Post)('permission'),
    __param(0, (0, common_2.Body)(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [role_dto_1.assignRoleToPermissionDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "assignPermission", null);
RoleController = __decorate([
    (0, common_3.Controller)('role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
exports.RoleController = RoleController;
//# sourceMappingURL=role.controller.js.map