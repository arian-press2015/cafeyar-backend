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
import { ProductImageService } from './productImage.service';
import {
  ProductImage,
  ProductImageRO,
  CreateProductImageDto,
  UpdateProductImageDto,
  FilterProductImageDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('product-image')
@Controller('product-image')
export class ProductImageController {
  constructor(private readonly productImageService: ProductImageService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new ProductImage' })
  @ApiBody({
    description: 'CreateProductImageDto Schema',
    type: CreateProductImageDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new ProductImage',
    type: ProductImageRO,
  })
  @ApiResponse({
    status: 400,
    description: 'ProductImage already exists',
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
    @Body() createProductImageDto: CreateProductImageDto,
  ): Promise<ProductImageRO> {
    return this.productImageService.create(userID, createProductImageDto);
  }

  @Get()
  @ApiBody({
    description: 'ProductImage query fields',
    type: FilterProductImageDto,
  })
  @ApiOperation({ summary: 'Get all of the ProductImages' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [ProductImage],
  })
  @ApiResponse({
    status: 404,
    description: 'No ProductImage found',
  })
  find(
    @Body() filterProductImageDto: FilterProductImageDto,
  ): Promise<ProductImage[]> {
    return this.productImageService.find(filterProductImageDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the ProductImage data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: ProductImageRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No ProductImage found',
  })
  findOne(@Param('id') catID: number): Promise<ProductImageRO> {
    return this.productImageService.findOne(catID);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current ProductImage' })
  @ApiBody({
    description: 'UpdateProductImageDto Schema',
    type: UpdateProductImageDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current ProductImage',
    type: ProductImageRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No ProductImage found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') productImageID: number,
    @Body() UpdateProductImageDto: UpdateProductImageDto,
  ): Promise<ProductImageRO> {
    return this.productImageService.update(
      userID,
      productImageID,
      UpdateProductImageDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current ProductImage' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current ProductImage',
    type: ProductImageRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No ProductImage found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') productImageID: number,
  ): Promise<ProductImageRO> {
    return this.productImageService.delete(userID, productImageID);
  }
}
