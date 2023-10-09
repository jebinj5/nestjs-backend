/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Type } from 'class-transformer';
import { IsString, MaxLength, IsNotEmpty, IsNumber, IsDate, IsArray } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly customerName: string;

  @Type(() => Date)
  @IsDate()
  createdAt: Date;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly city: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly country: string;

  @IsNumber()
  @IsNotEmpty()
  readonly zipCode: number;

 @IsString()
 @MaxLength(30)
 @IsNotEmpty()
 readonly status: string;

 @IsArray()
 @IsNotEmpty()
 readonly product: product[];

}

class product {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  readonly name: string;
  
  @IsNumber()
  @MaxLength(30)
  @IsNotEmpty()
  readonly price: number;
  
  @IsNumber()
  @MaxLength(30)
  @IsNotEmpty()
  readonly quantity: number;
}
