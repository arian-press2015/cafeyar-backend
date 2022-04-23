import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OrderService } from './order.service';
import {
  Order,
  OrderRO,
  CreateOrderDto,
  UpdateOrderDto,
  FilterOrderDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('order')
@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Order' })
  @ApiBody({
    description: 'CreateOrderDto Schema',
    type: CreateOrderDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Order',
    type: OrderRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Order already exists|Invalid host_id|Invalid invoice_id|Invalid total_price|Invalid total_discount|Invalid time|Invalid description|Invalid orderItems',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No User found',
  })
  create(
    @User('id') userID: number,
    @Body() createOrderDto: CreateOrderDto,
  ): Promise<OrderRO> {
    return this.orderService.create(userID, createOrderDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Order query fields',
    type: FilterOrderDto,
  })
  @ApiOperation({ summary: 'Get all of the Orders' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Order],
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid host_id|Invalid invoice_id|Invalid page|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Order found',
  })
  find(@Body() filterOrderDto: FilterOrderDto): Promise<Order[]> {
    return this.orderService.find(filterOrderDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Order data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: OrderRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Order found',
  })
  findOne(@Param('id') catID: number): Promise<OrderRO> {
    return this.orderService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Order' })
  @ApiBody({
    description: 'UpdateOrderDto Schema',
    type: UpdateOrderDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Order',
    type: OrderRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid total_price|Invalid total_discount|Invalid time|Invalid description|Invalid orderItems',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Order found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') orderID: number,
    @Body() UpdateOrderDto: UpdateOrderDto,
  ): Promise<OrderRO> {
    return this.orderService.update(userID, orderID, UpdateOrderDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Order' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Order',
    type: OrderRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Order found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') orderID: number,
  ): Promise<OrderRO> {
    return this.orderService.delete(userID, orderID);
  }
}
