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
import { IngredientService } from './ingredient.service';
import {
  Ingredient,
  IngredientRO,
  CreateIngredientDto,
  UpdateIngredientDto,
  FilterIngredientDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('ingredient')
@Controller('ingredient')
export class IngredientController {
  constructor(private readonly ingredientService: IngredientService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Ingredient' })
  @ApiBody({
    description: 'CreateIngredientDto Schema',
    type: CreateIngredientDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Ingredient',
    type: IngredientRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Ingredient already exists',
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
    @Body() createIngredientDto: CreateIngredientDto,
  ): Promise<IngredientRO> {
    return this.ingredientService.create(userID, createIngredientDto);
  }

  @Get()
  @ApiBody({
    description: 'Ingredient query fields',
    type: FilterIngredientDto,
  })
  @ApiOperation({ summary: 'Get all of the Ingredients' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Ingredient],
  })
  @ApiResponse({
    status: 404,
    description: 'No Ingredient found',
  })
  find(
    @Body() filterIngredientDto: FilterIngredientDto,
  ): Promise<Ingredient[]> {
    return this.ingredientService.find(filterIngredientDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Ingredient data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: IngredientRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Ingredient found',
  })
  findOne(@Param('id') catID: number): Promise<IngredientRO> {
    return this.ingredientService.findOne(catID);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Ingredient' })
  @ApiBody({
    description: 'UpdateIngredientDto Schema',
    type: UpdateIngredientDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Ingredient',
    type: IngredientRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Ingredient found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') ingredientID: number,
    @Body() UpdateIngredientDto: UpdateIngredientDto,
  ): Promise<IngredientRO> {
    return this.ingredientService.update(
      userID,
      ingredientID,
      UpdateIngredientDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Ingredient' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Ingredient',
    type: IngredientRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Ingredient found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') ingredientID: number,
  ): Promise<IngredientRO> {
    return this.ingredientService.delete(userID, ingredientID);
  }
}
