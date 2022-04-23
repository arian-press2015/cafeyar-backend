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
import { CategoryImageService } from './categoryImage.service';
import {
  CategoryImage,
  CategoryImageRO,
  CreateCategoryImageDto,
  UpdateCategoryImageDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('category-image')
@Controller('category-image')
export class CategoryImageController {
  constructor(private readonly categoryImageService: CategoryImageService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new CategoryImage' })
  @ApiBody({
    description: 'CreateCategoryImageDto Schema',
    type: CreateCategoryImageDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new CategoryImage',
    type: CategoryImageRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'CategoryImage already exists|Width must be a positive number|Height must be a positive number|Invalid url',
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
    @Body() createCategoryImageDto: CreateCategoryImageDto,
  ): Promise<CategoryImageRO> {
    return this.categoryImageService.create(userID, createCategoryImageDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the CategoryImage data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: CategoryImageRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No CategoryImage found',
  })
  findOne(@Param('id') catID: number): Promise<CategoryImageRO> {
    return this.categoryImageService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current CategoryImage' })
  @ApiBody({
    description: 'UpdateCategoryImageDto Schema',
    type: UpdateCategoryImageDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current CategoryImage',
    type: CategoryImageRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Width must be a positive number|Height must be a positive number|Invalid url',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No CategoryImage found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') categoryImageID: number,
    @Body() UpdateCategoryImageDto: UpdateCategoryImageDto,
  ): Promise<CategoryImageRO> {
    return this.categoryImageService.update(
      userID,
      categoryImageID,
      UpdateCategoryImageDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current CategoryImage' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current CategoryImage',
    type: CategoryImageRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No CategoryImage found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') categoryImageID: number,
  ): Promise<CategoryImageRO> {
    return this.categoryImageService.delete(userID, categoryImageID);
  }
}
