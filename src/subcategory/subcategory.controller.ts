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
import { SubcategoryService } from './subcategory.service';
import {
  CreateSubcategoryDto,
  UpdateSubcategoryDto,
  FilterSubcategoryDto,
  SubcategoryRO,
  Subcategory,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('subcategory')
@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Subcategory' })
  @ApiBody({
    description: 'CreateSubcategoryDto Schema',
    type: CreateSubcategoryDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Subcategory',
    type: SubcategoryRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Subcategory already exists|Invalid cat_id|Invalid name',
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
    @Body() createSubcategoryDto: CreateSubcategoryDto,
  ): Promise<SubcategoryRO> {
    return this.subcategoryService.create(userID, createSubcategoryDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Subcategory query fields',
    type: FilterSubcategoryDto,
  })
  @ApiOperation({ summary: "Get all of a category's Subcategories" })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Subcategory],
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid cat_id|Invalid page|Invalid limit',
  })
  @ApiResponse({
    status: 404,
    description: 'No Subcategory found',
  })
  find(
    @Body() filterSubcategoryDto: FilterSubcategoryDto,
  ): Promise<Subcategory[]> {
    return this.subcategoryService.find(filterSubcategoryDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Subcategory data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: SubcategoryRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Subcategory found',
  })
  findOne(@Param('id') catID: number): Promise<SubcategoryRO> {
    return this.subcategoryService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Subcategory' })
  @ApiBody({
    description: 'UpdateSubcategoryDto Schema',
    type: UpdateSubcategoryDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Subcategory',
    type: SubcategoryRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid name',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Subcategory found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') subcategoryID: number,
    @Body() UpdateSubcategoryDto: UpdateSubcategoryDto,
  ): Promise<SubcategoryRO> {
    return this.subcategoryService.update(
      userID,
      subcategoryID,
      UpdateSubcategoryDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Subcategory' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Subcategory',
    type: SubcategoryRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Subcategory found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') subcategoryID: number,
  ): Promise<SubcategoryRO> {
    return this.subcategoryService.delete(userID, subcategoryID);
  }
}
