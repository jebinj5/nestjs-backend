/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class product {
  @Prop()
  name: string;
  @Prop()
  price: number;
  @Prop()
  quantity: number;
}
// Generate a Mongoose Schema before use as Subdocument
const productSchema = SchemaFactory.createForClass(product);

@Schema()
export class Order {
  @Prop()
  customerName: string;
  @Prop()
  createdAt: Date;
  @Prop()
  address: string;
  @Prop()
  city: string;
  @Prop()
  country: string;
  @Prop()
  zipCode: number;
  @Prop()
  status: string;
  @Prop({ type: [productSchema] })
  product: product[]
}

export const OrderSchema = SchemaFactory.createForClass(Order);
