import { IsNotEmpty, IsString, Length } from 'class-validator';

export class RequestOtpDto {
  @IsString()
  @IsNotEmpty()
  @Length(10, 10, { message: 'Phone must be a valid 10-digit number' })
  phone: string;
}
