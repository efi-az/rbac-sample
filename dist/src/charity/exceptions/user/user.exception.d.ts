import { HttpException } from "@nestjs/common";
export declare class UserAleardyExist extends HttpException {
    constructor();
}
export declare class UserNotFound extends HttpException {
    constructor();
}
export declare class PasswordNotCorrect extends HttpException {
    constructor();
}
