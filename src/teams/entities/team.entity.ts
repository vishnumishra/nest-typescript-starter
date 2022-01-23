import { UUIDV4 } from 'sequelize';
import { Column, CreatedAt, DeletedAt, ForeignKey, IsUUID, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { Company } from 'src/companies/entities/company.entity';

@Table({
    timestamps: true,
    tableName: 'companies',
})
export class Team extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column
    uuid: string;

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

