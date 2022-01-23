import { UUIDV4 } from 'sequelize';
import { Column, CreatedAt, DeletedAt, IsUUID, Model, PrimaryKey, Table, UpdatedAt,Default, BelongsTo, HasMany } from 'sequelize-typescript';
import { Team } from 'src/teams/entities/team.entity';

@Table({
    timestamps: true,
    tableName: 'companies',
})
export class Company extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Default(UUIDV4)
    @Column
    id: string;

    @Column
    name: string;

    @Column
    ceo: string;

    @Column
    address: string;

    @Column
    inceptionDate: Date;

    @HasMany(() => Team)
    teams: Team[];

    @CreatedAt
    creationDate: Date;
  
    @UpdatedAt
    updatedOn: Date;
  
    @DeletedAt
    deletionDate: Date;
  
}
