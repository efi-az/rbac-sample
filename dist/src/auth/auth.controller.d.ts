import { AuthService } from "./auth.service";
import { UserAuthDto } from "./dto/user-auth.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registerUser(userRegisterDto: UserAuthDto): Promise<any>;
    loginUser(userLoginDto: UserAuthDto): Promise<any>;
    getUser(req: any): Promise<{
        result: any;
    }>;
}
