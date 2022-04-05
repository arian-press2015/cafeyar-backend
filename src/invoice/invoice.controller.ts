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
import { InvoiceService } from './invoice.service';
import {
  Invoice,
  InvoiceRO,
  CreateInvoiceDto,
  UpdateInvoiceDto,
  FilterInvoiceDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ValidationPipe } from '../shared/pipes/validation.pipe';
import { User } from 'src/user/user.decorator';

@ApiTags('invoice')
@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Invoice' })
  @ApiBody({
    description: 'CreateInvoiceDto Schema',
    type: CreateInvoiceDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Invoice',
    type: InvoiceRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Invoice already exists',
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
    @Body() createInvoiceDto: CreateInvoiceDto,
  ): Promise<InvoiceRO> {
    return this.invoiceService.create(userID, createInvoiceDto);
  }

  @Get()
  @ApiBody({
    description: 'Invoice query fields',
    type: FilterInvoiceDto,
  })
  @ApiOperation({ summary: 'Get all of the Invoices' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Invoice],
  })
  @ApiResponse({
    status: 404,
    description: 'No Invoice found',
  })
  find(@Body() filterInvoiceDto: FilterInvoiceDto): Promise<Invoice[]> {
    return this.invoiceService.find(filterInvoiceDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Invoice data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: InvoiceRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Invoice found',
  })
  findOne(@Param('id') catID: number): Promise<InvoiceRO> {
    return this.invoiceService.findOne(catID);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Invoice' })
  @ApiBody({
    description: 'UpdateInvoiceDto Schema',
    type: UpdateInvoiceDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Invoice',
    type: InvoiceRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Invoice found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') invoiceID: number,
    @Body() UpdateInvoiceDto: UpdateInvoiceDto,
  ): Promise<InvoiceRO> {
    return this.invoiceService.update(userID, invoiceID, UpdateInvoiceDto);
  }

  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Deletes current Invoice',
    type: InvoiceRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Invoice found|No User found',
  })
  @Delete(':id')
  delete(
    @User('id') userID: number,
    @Param('id') invoiceID: number,
  ): Promise<InvoiceRO> {
    return this.invoiceService.delete(userID, invoiceID);
  }
}
