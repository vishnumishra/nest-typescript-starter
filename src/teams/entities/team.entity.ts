import { Column, CreatedAt, DeletedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';
import { Company } from 'src/companies/entities/company.entity';

@Table({
    timestamps: true,
    tableName: 'companies',
})
export class Team extends Model {
    @PrimaryKey
    uuid: string;

    @ForeignKey(() => Company)
    companyId: string;

    @Column
    teamleadName: string;
}

