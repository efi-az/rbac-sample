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
exports.RolesEntity = void 0;
const permission_entity_1 = require("./permission.entity");
const user_entity_1 = require("./../user/user.entity");
const typeorm_1 = require("typeorm");
let RolesEntity = class RolesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('rowid'),
    __metadata("design:type", Number)
], RolesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RolesEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_entity_1.UserEntity, user => user.role, { nullable: true }),
    __metadata("design:type", Array)
], RolesEntity.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => permission_entity_1.PermissionEntity, permission => permission.role),
    __metadata("design:type", Array)
], RolesEntity.prototype, "permissions", void 0);
RolesEntity = __decorate([
    (0, typeorm_1.Entity)('roles')
], RolesEntity);
exports.RolesEntity = RolesEntity;
//# sourceMappingURL=role.entity.js.map