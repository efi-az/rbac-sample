import { RolesEntity } from './role.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('permission')
export class PermissionEntity {
    @PrimaryGeneratedColumn('rowid')
    id: number

    @Column()
    name: string

    @Column({array: true})
    access: string

    @ManyToOne(() => RolesEntity, role => role.permissions)
    role: RolesEntity
}