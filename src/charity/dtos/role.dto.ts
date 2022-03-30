import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {

    @ApiProperty()
    @IsString()
    name: string
}

export class assignRoleToPermissionDto {
    @ApiProperty()
    @IsString()
    permission: string

    @ApiProperty()
    @IsString()
    role: string
}