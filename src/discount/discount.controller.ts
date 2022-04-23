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
import { DiscountService } from './discount.service';
import {
  Discount,
  DiscountRO,
  CreateDiscountDto,
  UpdateDiscountDto,
  FilterDiscountDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('discount')
@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Discount' })
  @ApiBody({
    description: 'CreateDiscountDto Schema',
    type: CreateDiscountDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Discount',
    type: DiscountRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Discount code already taken|Invalid code|Invalid count|Invalid percentage|Invalid max_amount|Invalid expiry_date|Invalid products',
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
    @Body() createDiscountDto: CreateDiscountDto,
  ): Promise<DiscountRO> {
    return this.discountService.create(userID, createDiscountDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Discount query fields',
    type: FilterDiscountDto,
  })
  @ApiOperation({ summary: 'Get all of the Discounts' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Discount],
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid page|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Discount found',
  })
  find(@Body() filterDiscountDto: FilterDiscountDto): Promise<Discount[]> {
    return this.discountService.find(filterDiscountDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Discount data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: DiscountRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Discount found',
  })
  findOne(@Param('id') catID: number): Promise<DiscountRO> {
    return this.discountService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Discount' })
  @ApiBody({
    description: 'UpdateDiscountDto Schema',
    type: UpdateDiscountDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Discount',
    type: DiscountRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid code|Invalid count|Invalid percentage|Invalid max_amount|Invalid expiry_date|Invalid products',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Discount found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') discountID: number,
    @Body() UpdateDiscountDto: UpdateDiscountDto,
  ): Promise<DiscountRO> {
    return this.discountService.update(userID, discountID, UpdateDiscountDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Discount' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Discount',
    type: DiscountRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Discount found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') discountID: number,
  ): Promise<DiscountRO> {
    return this.discountService.delete(userID, discountID);
  }
}
