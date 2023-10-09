/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsString, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly firstName: string;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly lastName: string;
  @IsNumber()
   @IsNotEmpty()
  readonly mobileNumber: number;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly email: string;
}