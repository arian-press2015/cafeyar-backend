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
import { PurchaseService } from './purchase.service';
import {
  Purchase,
  PurchaseRO,
  CreatePurchaseDto,
  UpdatePurchaseDto,
  FilterPurchaseDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('purchase')
@Controller('purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Purchase' })
  @ApiBody({
    description: 'CreatePurchaseDto Schema',
    type: CreatePurchaseDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Purchase',
    type: PurchaseRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Purchase already exists|User_id must be a positive number|payment_id must be a positive number|Purchase_plan_id must be a positive number|Invalid purchase_date',
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
    @Body() createPurchaseDto: CreatePurchaseDto,
  ): Promise<PurchaseRO> {
    return this.purchaseService.create(userID, createPurchaseDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Purchase query fields',
    type: FilterPurchaseDto,
  })
  @ApiOperation({ summary: 'Get all of the Purchases' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Purchase],
  })
  @ApiResponse({
    status: 400,
    description:
      'User_id must be a positive number|Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Purchase found',
  })
  find(@Body() filterPurchaseDto: FilterPurchaseDto): Promise<Purchase[]> {
    return this.purchaseService.find(filterPurchaseDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Purchase data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: PurchaseRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Purchase found',
  })
  findOne(@Param('id') catID: number): Promise<PurchaseRO> {
    return this.purchaseService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Purchase' })
  @ApiBody({
    description: 'UpdatePurchaseDto Schema',
    type: UpdatePurchaseDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Purchase',
    type: PurchaseRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Purchase found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') purchaseID: number,
    @Body() UpdatePurchaseDto: UpdatePurchaseDto,
  ): Promise<PurchaseRO> {
    return this.purchaseService.update(userID, purchaseID, UpdatePurchaseDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Purchase' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Purchase',
    type: PurchaseRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Purchase found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') purchaseID: number,
  ): Promise<PurchaseRO> {
    return this.purchaseService.delete(userID, purchaseID);
  }
}
