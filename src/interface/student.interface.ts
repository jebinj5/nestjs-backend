/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Document } from 'mongoose';
export interface IStudent extends Document {
  readonly name: string;
  readonly rollnumber: number;
  readonly class: number;
  readonly gender: string;
  readonly marks: number;
  
}
