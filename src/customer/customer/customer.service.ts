import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';
import { ICustomer } from 'src/interface/createCustomer.interface';
@Injectable()
export class CustomerService {
    constructor(@InjectModel('customer') private customerModel:Model<ICustomer>){}
    //Create customer inside mongoo db
    async createCustomer(createCustomerDto: CreateCustomerDto): Promise<ICustomer>{
      const createCustomer = await new this.customerModel(createCustomerDto);
      return createCustomer.save();
  }
  //Reading all the customer from mongoo db
  async getAllCustomer():Promise<ICustomer[]>{
    const customerData = await this.customerModel.find();
    if(!customerData || customerData.length == 0){
        throw new NotFoundException('Student data not found');
    }
    return customerData;
}
   // Delete a customer
   async deleteCustomer(customerId: string): Promise<ICustomer> {
    const deleteCustomer = await this.customerModel.findByIdAndDelete(customerId);
    if(!deleteCustomer){
        throw new NotFoundException(`customer ${customerId} not found`);
    }
    return deleteCustomer;
   }

  //  Update customer by Id
   async updateCustomer(customerId: string, updateCustomer: CreateCustomerDto): Promise<ICustomer>{
    const existingCustomer = this.customerModel.findByIdAndUpdate(customerId, updateCustomer, {new: true});
    if(!existingCustomer){
        throw new NotFoundException(`customer ${customerId} not found`);
    }
    return existingCustomer;
   }
}
