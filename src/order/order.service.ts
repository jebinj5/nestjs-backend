/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { UpdateOrderDto } from 'src/dto/update-order.dto';
import { IOrder } from 'src/interface/order.interface';

@Injectable()
export class OrderService {
    constructor(@InjectModel('order') private orderModel:Model<IOrder>){}
    //Create Order inside mongoo db
    async createOrder(createrderDto: CreateOrderDto): Promise<IOrder>{
        //createrderDto.createdAt = new Date();
        console.log('createrderDto::', JSON.stringify(createrderDto));
        const newOrder = await new this.orderModel(createrderDto);
        return newOrder.save();
    }

     //Reading all the order from mongoo db
     async getAllOrder():Promise<IOrder[]>{
        const orderData = await this.orderModel.find();
        if(!orderData || orderData.length == 0){
            throw new NotFoundException('Order data not found');
        }
        return orderData;
   }

   //Get Single record from db

   async getOrder(orderId: string):Promise<IOrder>{
    const existingOrder = await this.orderModel.findById(orderId);
    if(!existingOrder){
        throw new NotFoundException('Order not found');
    }
    return existingOrder;
    }

    // Delete a Order

    async deleteOrder(ordrId: string): Promise<IOrder> {
    const deleteOrder = await this.orderModel.findByIdAndDelete(ordrId);
    if(!deleteOrder){
        throw new NotFoundException(`Order ${ordrId} not found`);
    }
    return deleteOrder;
    }

    //Update order by Id
   async updateOrder(orderId: string, updateOrder: UpdateOrderDto): Promise<IOrder>{
    const existingOrder = this.orderModel.findByIdAndUpdate(orderId, updateOrder, {new: true});
    if(!existingOrder){
        throw new NotFoundException(`Student ${orderId} not found`);
    }
    return existingOrder;
   }
}
