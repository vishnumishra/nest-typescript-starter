import { Column, CreatedAt, DeletedAt, Model, PrimaryKey, Table, UpdatedAt } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: 'companies',
})
export class Company extends Model {
    @PrimaryKey
    uuid: string;

    @Column
    name: string;

    @Column
    ceo: string;

    @Column
    address: string;

    @Column
    inceptionDate: Date;

    @CreatedAt
    creationDate: Date;
  
    @UpdatedAt
    updatedOn: Date;
  
    @DeletedAt
    deletionDate: Date;
  
}
