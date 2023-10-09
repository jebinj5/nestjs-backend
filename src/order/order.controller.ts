/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller,
  Post,
  Put,
  Param,
  Res,
  Header,
  HttpStatus,
  Delete,
  Get,
  Body,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { UpdateOrderDto } from 'src/dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @Post()
  async createOrder(@Res() response, @Body() createOrdertDto: CreateOrderDto) {
    try {
      const newOrder = await this.orderService.createOrder(createOrdertDto);
      return response
        .status(HttpStatus.CREATED)
        .json({ message: 'Order has been created successfully', newOrder });
    } catch {
      return response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: 400,
        message: 'Error Order not created',
        error: 'Bad Request',
      });
    }
  }

  @Get()
  async getOrder(@Res() response) {
    try {
      const orderData = await this.orderService.getAllOrder();
      return response.status(HttpStatus.OK).json({
        message: 'Get all Order',
        orderData,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Put('/:id')
  async updateOrder(
    @Res() response,
    @Param('id') ordertId: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    try {
      const existingOrder = await this.orderService.updateOrder(
        ordertId,
        updateOrderDto,
      );
      return response.status(HttpStatus.OK).json({
        message: 'Order Detail updated',
        existingOrder,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Delete('/:id')
  async deleteOrder(@Res() response, @Param('id') orderId: string) {
    try {
      const deleteOrder = await this.orderService.deleteOrder(orderId);
      return response.status(HttpStatus.OK).json({
        message: 'Student deleted',
        deleteOrder,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Get('/:id')
  async getOrderById(@Res() response, @Param('id') orderId: string) {
    try {
      const existingOrder = await this.orderService.getOrder(orderId);
      return response.status(HttpStatus.OK).json({
        message: 'Oder detail',
        existingOrder,
      });
    } catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
}
