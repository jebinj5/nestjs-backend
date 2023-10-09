/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Customer {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop()
  mobileNumber: number;
  @Prop()
  email: string;
}

export const cutomerSchema = SchemaFactory.createForClass(Customer);