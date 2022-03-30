import { UserAuthDto } from './../../../auth/dto/user-auth.dto';
import { PaymentUserAbility } from './../../../ability/ability.decorator';
import { AbilityGuard } from './../../../ability/ability.guard';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './../../entities/user/user.entity';
import { Injectable, UseGuards } from "@nestjs/common";
import { CheckAbilities } from 'src/ability/ability.decorator';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private readonly userRep: Repository<UserEntity>) {}

    async createUser(userRegisterDto: UserAuthDto): Promise<UserEntity> {
        return await this.userRep.save(userRegisterDto)
    }

    // @UseGuards(AbilityGuard)
    // @CheckAbilities(new PaymentUserAbility())
    async findOne(conditions): Promise<UserEntity> {
        return await this.userRep.findOne(conditions)
    }
}