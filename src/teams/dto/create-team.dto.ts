import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateTeamDto {
    @IsNotEmpty()
    @IsUUID(4)
    readonly uuid: string;

    @IsNotEmpty()
    readonly companyId: string;

    @IsNotEmpty()
    readonly teamleadName: string;

}
