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
import { SubcategoryDiscountService } from './subcategoryDiscount.service';
import {
  SubcategoryDiscount,
  SubcategoryDiscountRO,
  CreateSubcategoryDiscountDto,
  UpdateSubcategoryDiscountDto,
  FilterSubcategoryDiscountDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('subcategory-discount')
@Controller('subcategory-discount')
export class SubcategoryDiscountController {
  constructor(
    private readonly subcategoryDiscountService: SubcategoryDiscountService,
  ) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new SubcategoryDiscount' })
  @ApiBody({
    description: 'CreateSubcategoryDiscountDto Schema',
    type: CreateSubcategoryDiscountDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new SubcategoryDiscount',
    type: SubcategoryDiscountRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'SubcategoryDiscount already exists|Cat_id must be a positive number|Sub_cat_id must be a positive number|Count must be a positive number|Percentage must be a positive number|Invalid max_amount|Invalid expiry_date',
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
    @Body()
    createSubcategoryDiscountDto: CreateSubcategoryDiscountDto,
  ): Promise<SubcategoryDiscountRO> {
    return this.subcategoryDiscountService.create(
      userID,
      createSubcategoryDiscountDto,
    );
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'SubcategoryDiscount query fields',
    type: FilterSubcategoryDiscountDto,
  })
  @ApiOperation({ summary: 'Get all of the SubcategoryDiscounts' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [SubcategoryDiscount],
  })
  @ApiResponse({
    status: 400,
    description:
      'Cat_id must be a positive number|Sub_cat_id must be a positive number|Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No SubcategoryDiscount found',
  })
  find(
    @Body()
    filterSubcategoryDiscountDto: FilterSubcategoryDiscountDto,
  ): Promise<SubcategoryDiscount[]> {
    return this.subcategoryDiscountService.find(filterSubcategoryDiscountDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the SubcategoryDiscount data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: SubcategoryDiscountRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No SubcategoryDiscount found',
  })
  findOne(@Param('id') catID: number): Promise<SubcategoryDiscountRO> {
    return this.subcategoryDiscountService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current SubcategoryDiscount' })
  @ApiBody({
    description: 'UpdateSubcategoryDiscountDto Schema',
    type: UpdateSubcategoryDiscountDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current SubcategoryDiscount',
    type: SubcategoryDiscountRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Count must be a positive number|Percentage must be a positive number|Invalid max_amount|Invalid expiry_date',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No SubcategoryDiscount found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') subcategoryDiscountID: number,
    @Body()
    UpdateSubcategoryDiscountDto: UpdateSubcategoryDiscountDto,
  ): Promise<SubcategoryDiscountRO> {
    return this.subcategoryDiscountService.update(
      userID,
      subcategoryDiscountID,
      UpdateSubcategoryDiscountDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current SubcategoryDiscount' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current SubcategoryDiscount',
    type: SubcategoryDiscountRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No SubcategoryDiscount found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') subcategoryDiscountID: number,
  ): Promise<SubcategoryDiscountRO> {
    return this.subcategoryDiscountService.delete(
      userID,
      subcategoryDiscountID,
    );
  }
}
