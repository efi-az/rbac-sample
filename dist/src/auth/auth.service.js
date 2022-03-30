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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const role_service_1 = require("./../charity/services/auth/role.service");
const user_service_1 = require("./../charity/services/user/user.service");
const user_exception_1 = require("./../charity/exceptions/user/user.exception");
const user_entity_1 = require("./../charity/entities/user/user.entity");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const constants_1 = require("./constants");
let AuthService = class AuthService {
    constructor(userService, jwtService, roleService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.roleService = roleService;
    }
    async validateUser(userLoginDto) {
        const findUser = await this.userService.findOne({ where: { phone: userLoginDto.phone } });
        if (!findUser)
            throw new user_exception_1.UserNotFound();
        if (!bcrypt.compareSync(userLoginDto.password, findUser.password))
            throw new user_exception_1.PasswordNotCorrect();
        const { password } = findUser, result = __rest(findUser, ["password"]);
        return result;
    }
    async login(userLoginDto) {
        const user = await this.validateUser(userLoginDto);
        const payload = { userId: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async registerUser(userDto) {
        const findUser = await this.userService.findOne({ where: { phone: userDto.phone } });
        if (findUser)
            throw new user_exception_1.UserAleardyExist();
        const hashPassword = bcrypt.hashSync(userDto.password, constants_1.jwtConstants.salt);
        const findRole = await this.roleService.findOne({ name: 'guest' });
        const user = new user_entity_1.UserEntity();
        user.phone = userDto.phone;
        user.password = hashPassword;
        user.role = findRole;
        await this.userService.createUser(user);
        return {
            result: true
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService, jwt_1.JwtService, role_service_1.RoleService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map