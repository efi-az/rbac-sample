import { PermissionEntity } from './permission.entity';
import { UserEntity } from './../user/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class RolesEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number
    
    @Column()
    name: string

    @OneToMany(() => UserEntity, user => user.role, {nullable: true})
    users: UserEntity[]

    @OneToMany(() => PermissionEntity, permission => permission.role)
    permissions: PermissionEntity[]
}