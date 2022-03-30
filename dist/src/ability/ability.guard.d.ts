import { UserService } from './../charity/services/user/user.service';
import { AbilityFactory } from './ability.factory';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
export declare class AbilityGuard implements CanActivate {
    private reflector;
    private caslAbilityFactory;
    private userService;
    constructor(reflector: Reflector, caslAbilityFactory: AbilityFactory, userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
