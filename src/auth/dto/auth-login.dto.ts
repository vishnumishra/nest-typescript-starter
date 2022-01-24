import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

export class AuthLoginDto {
  @IsUUID()
  companyId: string;

}