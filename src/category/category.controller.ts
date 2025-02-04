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
import { CategoryService } from './category.service';
import {
  Category,
  CategoryRO,
  CreateCategoryDto,
  UpdateCategoryDto,
  FilterCategoryDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Category' })
  @ApiBody({
    description: 'CreateCategoryDto Schema',
    type: CreateCategoryDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Category',
    type: CategoryRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Category already exists|Host_id must be a positive number|Name must be a string|Item_count must be a positive number|Item_min_price must be a positive number|Item_max_price must be a positive number',
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
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<CategoryRO> {
    return this.categoryService.create(userID, createCategoryDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Category query fields',
    type: FilterCategoryDto,
  })
  @ApiOperation({ summary: 'Get all of the Categorys' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Category],
  })
  @ApiResponse({
    status: 400,
    description:
      'Host_id must be a positive number|Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Category found',
  })
  find(@Query() filterCategoryDto: FilterCategoryDto): Promise<Category[]> {
    return this.categoryService.find(filterCategoryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Category data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: CategoryRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Host_id must be a positive number|Name must be a string|Item_count must be a positive number|Item_min_price must be a positive number|Item_max_price must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Category found',
  })
  findOne(@Param('id') catID: number): Promise<CategoryRO> {
    return this.categoryService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Category' })
  @ApiBody({
    description: 'UpdateCategoryDto Schema',
    type: UpdateCategoryDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Category',
    type: CategoryRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Category found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') categoryID: number,
    @Body() UpdateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryRO> {
    return this.categoryService.update(userID, categoryID, UpdateCategoryDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Category' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Category',
    type: CategoryRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Category found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') categoryID: number,
  ): Promise<CategoryRO> {
    return this.categoryService.delete(userID, categoryID);
  }
}
