"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserAbility = exports.PaymentUserAbility = exports.CheckAbilities = exports.CHECK_ABILITY = void 0;
const user_entity_1 = require("./../charity/entities/user/user.entity");
const common_1 = require("@nestjs/common");
const ability_factory_1 = require("./ability.factory");
exports.CHECK_ABILITY = 'check_ability';
const CheckAbilities = (...requirements) => (0, common_1.SetMetadata)(exports.CHECK_ABILITY, requirements);
exports.CheckAbilities = CheckAbilities;
class PaymentUserAbility {
    constructor() {
        this.action = ability_factory_1.Action.Create;
        this.subject = user_entity_1.UserEntity;
    }
}
exports.PaymentUserAbility = PaymentUserAbility;
class DeleteUserAbility {
    constructor() {
        this.action = ability_factory_1.Action.Delete;
        this.subject = user_entity_1.UserEntity;
    }
}
exports.DeleteUserAbility = DeleteUserAbility;
//# sourceMappingURL=ability.decorator.js.map