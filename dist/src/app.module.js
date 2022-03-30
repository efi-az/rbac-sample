"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const config_module_1 = require("./config/config.module");
const common_1 = require("@nestjs/common");
const database_module_1 = require("./database/database.module");
const auth_module_1 = require("./auth/auth.module");
const charity_module_1 = require("./charity/charity.module");
const nestjs_rbac_1 = require("nestjs-rbac");
const dynamic_storage_service_1 = require("./dynamic-storage.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_rbac_1.RBAcModule.forDynamic(dynamic_storage_service_1.DynamicStorageService, [dynamic_storage_service_1.DynamicStorageService], [charity_module_1.CharityModule]),
            config_module_1.ConfigModule, database_module_1.DatabaseModule, auth_module_1.AuthModule, charity_module_1.CharityModule
        ],
        providers: [dynamic_storage_service_1.DynamicStorageService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map