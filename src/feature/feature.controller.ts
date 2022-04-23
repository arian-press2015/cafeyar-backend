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
import { FeatureService } from './feature.service';
import {
  Feature,
  FeatureRO,
  CreateFeatureDto,
  UpdateFeatureDto,
  FilterFeatureDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('feature')
@Controller('feature')
export class FeatureController {
  constructor(private readonly featureService: FeatureService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Feature' })
  @ApiBody({
    description: 'CreateFeatureDto Schema',
    type: CreateFeatureDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Feature',
    type: FeatureRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Feature title already taken|Title must be a string|Invalid description|Invalid version',
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
    @Body() createFeatureDto: CreateFeatureDto,
  ): Promise<FeatureRO> {
    return this.featureService.create(userID, createFeatureDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Feature query fields',
    type: FilterFeatureDto,
  })
  @ApiOperation({ summary: 'Get all of the Features' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Feature],
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid version|Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Feature found',
  })
  find(@Body() filterFeatureDto: FilterFeatureDto): Promise<Feature[]> {
    return this.featureService.find(filterFeatureDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Feature data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: FeatureRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Feature found',
  })
  findOne(@Param('id') catID: number): Promise<FeatureRO> {
    return this.featureService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Feature' })
  @ApiBody({
    description: 'UpdateFeatureDto Schema',
    type: UpdateFeatureDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Feature',
    type: FeatureRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Title must be a string|Invalid description|Invalid version',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Feature found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') featureID: number,
    @Body() UpdateFeatureDto: UpdateFeatureDto,
  ): Promise<FeatureRO> {
    return this.featureService.update(userID, featureID, UpdateFeatureDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Feature' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Feature',
    type: FeatureRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Feature found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') featureID: number,
  ): Promise<FeatureRO> {
    return this.featureService.delete(userID, featureID);
  }
}
