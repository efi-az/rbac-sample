import { UserEntity } from './../charity/entities/user/user.entity';
import { Ability, InferSubjects } from '@casl/ability';
export declare enum Action {
    Manage = "manage",
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete"
}
export declare type Subjects = InferSubjects<typeof UserEntity>;
export declare type AppAbility = Ability<[Action, Subjects]>;
export declare class AbilityFactory {
    defineAbility(user: UserEntity): AppAbility;
}
