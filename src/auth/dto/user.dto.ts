/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Type } from 'class-transformer';
import { IsString, MaxLength, IsNotEmpty, IsEmail } from 'class-validator';

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsEmail()
    @IsNotEmpty({ message: 'Please Enter correct Email'})
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly password: string;

}