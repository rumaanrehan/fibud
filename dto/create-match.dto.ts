import { IsString } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  expertId: string;

  @IsString()
  clientId: string;
}
