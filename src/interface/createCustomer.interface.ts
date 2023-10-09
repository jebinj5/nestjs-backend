/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Document } from 'mongoose';
export interface ICustomer extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly mobileNumber: number;
  readonly email: string;
}