import { UserAuthDto } from './../../../auth/dto/user-auth.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './../../entities/user/user.entity';
export declare class UserService {
    private readonly userRep;
    constructor(userRep: Repository<UserEntity>);
    createUser(userRegisterDto: UserAuthDto): Promise<UserEntity>;
    findOne(conditions: any): Promise<UserEntity>;
}
