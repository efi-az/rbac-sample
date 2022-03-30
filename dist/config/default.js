"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    orm: {
        database: 'charity',
        username: 'user',
        password: 'postgres',
        port: 4000,
        host: 'localhost',
        entities: [__dirname + '/../**/**.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
    },
};
//# sourceMappingURL=default.js.map