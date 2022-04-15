import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductStarService } from './productStar.service';
import {
  ProductStar,
  ProductStarRO,
  CreateProductStarDto,
  FilterProductStarDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('product-star')
@Controller('product-star')
export class ProductStarController {
  constructor(private readonly productStarService: ProductStarService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new ProductStar' })
  @ApiBody({
    description: 'CreateProductStarDto Schema',
    type: CreateProductStarDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new ProductStar',
    type: ProductStarRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'ProductStar already exists|Invalid product_id|Invalid user_id|Invalid star',
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
    @Body() createProductStarDto: CreateProductStarDto,
  ): Promise<ProductStarRO> {
    return this.productStarService.create(userID, createProductStarDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'ProductStar query fields',
    type: FilterProductStarDto,
  })
  @ApiOperation({ summary: 'Get all of the ProductStars' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [ProductStar],
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid page|Invalid limit',
  })
  @ApiResponse({
    status: 404,
    description: 'No ProductStar found',
  })
  find(
    @Body() filterProductStarDto: FilterProductStarDto,
  ): Promise<ProductStar[]> {
    return this.productStarService.find(filterProductStarDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the ProductStar data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: ProductStarRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No ProductStar found',
  })
  findOne(@Param('id') catID: number): Promise<ProductStarRO> {
    return this.productStarService.findOne(catID);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current ProductStar' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current ProductStar',
    type: ProductStarRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No ProductStar found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') productStarID: number,
  ): Promise<ProductStarRO> {
    return this.productStarService.delete(userID, productStarID);
  }
}
