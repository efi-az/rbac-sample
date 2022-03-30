import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { ConfigService } from "src/config/config.service";
export declare class PostgresTypeOrmConfigService implements TypeOrmOptionsFactory {
    private readonly configService;
    constructor(configService: ConfigService);
    createTypeOrmOptions(): TypeOrmModuleOptions;
}
