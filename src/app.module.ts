import { RoleService } from 'src/charity/services/auth/role.service';
import { ConfigModule } from './config/config.module';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { CharityModule } from './charity/charity.module';
import { RBAcModule } from 'nestjs-rbac';
import { DynamicStorageService } from './dynamic-storage.service';

@Module({
  imports: [
    RBAcModule.forDynamic(DynamicStorageService, [DynamicStorageService], [CharityModule]),
    ConfigModule, DatabaseModule, AuthModule, CharityModule
  ],
  providers: [DynamicStorageService]
}) 
export class AppModule {}
