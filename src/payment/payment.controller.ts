import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import {
  Payment,
  PaymentRO,
  CreatePaymentDto,
  UpdatePaymentDto,
  FilterPaymentDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
import { User } from 'src/user/user.decorator';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Payment' })
  @ApiBody({
    description: 'CreatePaymentDto Schema',
    type: CreatePaymentDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Payment',
    type: PaymentRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Payment already exists',
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
    @Body() createPaymentDto: CreatePaymentDto,
  ): Promise<PaymentRO> {
    return this.paymentService.create(userID, createPaymentDto);
  }

  @Get()
  @ApiBody({
    description: 'Payment query fields',
    type: FilterPaymentDto,
  })
  @ApiOperation({ summary: 'Get all of the Payments' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Payment],
  })
  @ApiResponse({
    status: 404,
    description: 'No Payment found',
  })
  find(@Body() filterPaymentDto: FilterPaymentDto): Promise<Payment[]> {
    return this.paymentService.find(filterPaymentDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Payment data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: PaymentRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Payment found',
  })
  findOne(@Param('id') catID: number): Promise<PaymentRO> {
    return this.paymentService.findOne(catID);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Payment' })
  @ApiBody({
    description: 'UpdatePaymentDto Schema',
    type: UpdatePaymentDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Payment',
    type: PaymentRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Payment found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') paymentID: number,
    @Body() UpdatePaymentDto: UpdatePaymentDto,
  ): Promise<PaymentRO> {
    return this.paymentService.update(userID, paymentID, UpdatePaymentDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Payment' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Payment',
    type: PaymentRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Payment found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') paymentID: number,
  ): Promise<PaymentRO> {
    return this.paymentService.delete(userID, paymentID);
  }
}
