import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CustomerService } from './customer/customer.service';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
    @Post('create')
    async createCustomer(
      @Res() response,
      @Body() createCustomerDto: CreateCustomerDto,
    ) {
      try {
        const newCustomer =
          await this.customerService.createCustomer(createCustomerDto);
        return response
          .status(HttpStatus.CREATED)
          .json({ message: 'Customer has been created successfully', newCustomer });
      } catch {
        return response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: 400,
          message: 'Error Customer not created',
          error: 'Bad Request',
        });
      }
    }
    @Get('getAllCustomer')
    async getCustomer(@Res() response) {
      try {
        const customerData = await this.customerService.getAllCustomer();
        return response.status(HttpStatus.OK).json({
          message: 'Get all customer',
          customerData,
        });
      } catch (err) {
        console.log(err)
        return response.status(err.status).json(err.response);
      }
    }
    @Delete('/:id')
    async deleteCustomer(@Res() response, @Param('id') customerId: string) {
      try {
        const deleteCustomer = await this.customerService.deleteCustomer(customerId);
        return response.status(HttpStatus.OK).json({
          message: 'Customer deleted',
          deleteCustomer,
        });
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
    @Put('/:id')
    async updateStudent(
      @Res() response,
      @Param('id') customerId: string,
      @Body() updateCustomerDto: CreateCustomerDto,
    ) {
      try {
        const existingCustomer = await this.customerService.updateCustomer(
          customerId,
          updateCustomerDto,
        );
        return response.status(HttpStatus.OK).json({
          message: 'Customer Detail updated',
          existingCustomer,
        });
      } catch (err) {
        return response.status(err.status).json(err.response);
      }
    }
}
