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
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import {
  Product,
  ProductRO,
  CreateProductDto,
  UpdateProductDto,
  FilterProductDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('product')
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Product' })
  @ApiBody({
    description: 'CreateProductDto Schema',
    type: CreateProductDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Product',
    type: ProductRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Product already exists|Sub_cat_id must be a positive number|Name must be a string|Price must be a positive number|Invalid enable status|Invalid deletion status|Ingredients must be a positive number',
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
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductRO> {
    return this.productService.create(userID, createProductDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Product query fields',
    type: FilterProductDto,
  })
  @ApiOperation({ summary: 'Get all of the Products' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Product],
  })
  @ApiResponse({
    status: 400,
    description:
      'Sub_cat_id must be a positive number|Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Product found',
  })
  find(@Query() filterProductDto: FilterProductDto): Promise<Product[]> {
    return this.productService.find(filterProductDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Product data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: ProductRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Product found',
  })
  findOne(@Param('id') catID: number): Promise<ProductRO> {
    return this.productService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Product' })
  @ApiBody({
    description: 'UpdateProductDto Schema',
    type: UpdateProductDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Product',
    type: ProductRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Name must be a string|Price must be a positive number|Invalid enable status|Invalid deletion status|Ingredients must be a positive number',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Product found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') productID: number,
    @Body() UpdateProductDto: UpdateProductDto,
  ): Promise<ProductRO> {
    return this.productService.update(userID, productID, UpdateProductDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Product' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Product',
    type: ProductRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Product found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') productID: number,
  ): Promise<ProductRO> {
    return this.productService.delete(userID, productID);
  }
}
