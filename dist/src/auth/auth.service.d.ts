import { RoleService } from './../charity/services/auth/role.service';
import { UserAuthDto } from './dto/user-auth.dto';
import { UserService } from './../charity/services/user/user.service';
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private readonly userService;
    private jwtService;
    private roleService;
    constructor(userService: UserService, jwtService: JwtService, roleService: RoleService);
    validateUser(userLoginDto: UserAuthDto): Promise<any>;
    login(userLoginDto: UserAuthDto): Promise<any>;
    registerUser(userDto: UserAuthDto): Promise<any>;
}
