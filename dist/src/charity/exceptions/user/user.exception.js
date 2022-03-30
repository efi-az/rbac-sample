"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordNotCorrect = exports.UserNotFound = exports.UserAleardyExist = void 0;
const common_1 = require("@nestjs/common");
class UserAleardyExist extends common_1.HttpException {
    constructor() {
        super('کاربر تکراری است', common_1.HttpStatus.CONFLICT);
    }
}
exports.UserAleardyExist = UserAleardyExist;
class UserNotFound extends common_1.HttpException {
    constructor() {
        super('کاربر پیدا نشد', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.UserNotFound = UserNotFound;
class PasswordNotCorrect extends common_1.HttpException {
    constructor() {
        super('رمز عبور اشتباه است', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.PasswordNotCorrect = PasswordNotCorrect;
//# sourceMappingURL=user.exception.js.map