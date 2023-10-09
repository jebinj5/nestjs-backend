/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Document } from 'mongoose';

export interface IOrder extends Document {
  readonly customerName: string;
  readonly createdAt: Date;
  readonly address: string;
  readonly city: string;
  readonly country: string;
  readonly zipCode: number;
  readonly status: string;
  readonly product: IProduct[];
 }
 export interface IProduct extends Document {
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
 }