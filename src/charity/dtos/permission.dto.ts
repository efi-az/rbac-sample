import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsString } from "class-validator";

export class CreatePermissionDto {

    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsArray()
    access: string
}