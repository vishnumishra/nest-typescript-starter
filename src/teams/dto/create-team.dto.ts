import { IsNotEmpty, IsUUID } from "class-validator";

export class CreateTeamDto {
    @IsUUID(4)
    readonly id: string;

    @IsNotEmpty()
    readonly companyId: string;

    @IsNotEmpty()
    readonly teamleadName: string;

}
