import { UserEntity } from './../charity/entities/user/user.entity';
import { Action, Subjects } from './ability.factory';
export interface RequiredRule {
    action: Action;
    subject: Subjects;
}
export declare const CHECK_ABILITY = "check_ability";
export declare const CheckAbilities: (...requirements: RequiredRule[]) => import("@nestjs/common").CustomDecorator<string>;
export declare class PaymentUserAbility implements RequiredRule {
    action: Action;
    subject: typeof UserEntity;
}
export declare class DeleteUserAbility implements RequiredRule {
    action: Action;
    subject: typeof UserEntity;
}
