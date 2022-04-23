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
import { PurchaseDiscountService } from './purchaseDiscount.service';
import {
  PurchaseDiscount,
  PurchaseDiscountRO,
  CreatePurchaseDiscountDto,
  UpdatePurchaseDiscountDto,
  FilterPurchaseDiscountDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('purchase-discount')
@Controller('purchase-discount')
export class PurchaseDiscountController {
  constructor(
    private readonly purchaseDiscountService: PurchaseDiscountService,
  ) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new PurchaseDiscount' })
  @ApiBody({
    description: 'CreatePurchaseDiscountDto Schema',
    type: CreatePurchaseDiscountDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new PurchaseDiscount',
    type: PurchaseDiscountRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'PurchaseDiscount already exists|Purchase_plan_id must be a positive number|Invalid code|Count must be a positive number|Percentage must be a positive number|Max_amount must be a positive number|Invalid expiry_date',
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
    @Body() createPurchaseDiscountDto: CreatePurchaseDiscountDto,
  ): Promise<PurchaseDiscountRO> {
    return this.purchaseDiscountService.create(
      userID,
      createPurchaseDiscountDto,
    );
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'PurchaseDiscount query fields',
    type: FilterPurchaseDiscountDto,
  })
  @ApiOperation({ summary: 'Get all of the PurchaseDiscounts' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [PurchaseDiscount],
  })
  @ApiResponse({
    status: 400,
    description:
      'Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseDiscount found',
  })
  find(
    @Body() filterPurchaseDiscountDto: FilterPurchaseDiscountDto,
  ): Promise<PurchaseDiscount[]> {
    return this.purchaseDiscountService.find(filterPurchaseDiscountDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the PurchaseDiscount data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: PurchaseDiscountRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseDiscount found',
  })
  findOne(@Param('id') catID: number): Promise<PurchaseDiscountRO> {
    return this.purchaseDiscountService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current PurchaseDiscount' })
  @ApiBody({
    description: 'UpdatePurchaseDiscountDto Schema',
    type: UpdatePurchaseDiscountDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current PurchaseDiscount',
    type: PurchaseDiscountRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Purchase_plan_id must be a positive number|Invalid code|Count must be a positive number|Percentage must be a positive number|Max_amount must be a positive number|Invalid expiry_date',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseDiscount found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') purchaseDiscountID: number,
    @Body() UpdatePurchaseDiscountDto: UpdatePurchaseDiscountDto,
  ): Promise<PurchaseDiscountRO> {
    return this.purchaseDiscountService.update(
      userID,
      purchaseDiscountID,
      UpdatePurchaseDiscountDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current PurchaseDiscount' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current PurchaseDiscount',
    type: PurchaseDiscountRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseDiscount found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') purchaseDiscountID: number,
  ): Promise<PurchaseDiscountRO> {
    return this.purchaseDiscountService.delete(userID, purchaseDiscountID);
  }
}
