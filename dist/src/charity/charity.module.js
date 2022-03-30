"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharityModule = void 0;
const permission_entity_1 = require("./entities/auth/permission.entity");
const role_controller_1 = require("./controllers/role/role.controller");
const role_service_1 = require("./services/auth/role.service");
const role_entity_1 = require("./entities/auth/role.entity");
const user_entity_1 = require("./entities/user/user.entity");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("./services/user/user.service");
const common_1 = require("@nestjs/common");
const permission_service_1 = require("./services/auth/permission.service");
const permission_controller_1 = require("./controllers/permission/permission.controller");
let CharityModule = class CharityModule {
};
CharityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.UserEntity, role_entity_1.RolesEntity, permission_entity_1.PermissionEntity])],
        providers: [user_service_1.UserService, role_service_1.RoleService, permission_service_1.PermissionService],
        controllers: [role_controller_1.RoleController, permission_controller_1.PermissionController],
        exports: [user_service_1.UserService, role_service_1.RoleService, permission_service_1.PermissionService]
    })
], CharityModule);
exports.CharityModule = CharityModule;
//# sourceMappingURL=charity.module.js.map