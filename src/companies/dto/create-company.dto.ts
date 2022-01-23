import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateCompanyDto {

    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly ceo: string;

    @IsNotEmpty()
    readonly address: string;

    @IsNotEmpty()
    readonly inceptionDate: Date;

}
