import { UUIDV4 } from 'sequelize';
import { Column, CreatedAt, Default, DeletedAt, ForeignKey, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { Company } from 'src/companies/entities/company.entity';

@Table({
    timestamps: true,
    tableName: 'teams',
})
export class Team extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Default(UUIDV4)
    @Column
    id: string;

    @ForeignKey(() => Company)
    companyId: string;

    @Column
    teamleadName: string;

    @CreatedAt
    creationDate: Date;
  
    @UpdatedAt
    updatedOn: Date;
  
    @DeletedAt
    deletionDate: Date;
}

