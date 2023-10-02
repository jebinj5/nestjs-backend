/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { IsString, MaxLength, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStudentDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;
  @IsNumber()
   @IsNotEmpty()
  readonly rollnumber: number;
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly gender: string;
  @IsNumber()
  @IsNotEmpty()
 readonly class: number;
 @IsNumber()
  @IsNotEmpty()
 readonly marks: number;
}
