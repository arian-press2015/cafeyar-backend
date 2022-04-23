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
import { ImageTypeService } from './imageType.service';
import {
  ImageType,
  ImageTypeRO,
  CreateImageTypeDto,
  UpdateImageTypeDto,
  FilterImageTypeDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('image-type')
@Controller('image-type')
export class ImageTypeController {
  constructor(private readonly imageTypeService: ImageTypeService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new ImageType' })
  @ApiBody({
    description: 'CreateImageTypeDto Schema',
    type: CreateImageTypeDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new ImageType',
    type: ImageTypeRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'ImageType already exists|Invalid type|Invalid description|Invalid width|Invalid height',
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
    @Body() createImageTypeDto: CreateImageTypeDto,
  ): Promise<ImageTypeRO> {
    return this.imageTypeService.create(userID, createImageTypeDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'ImageType query fields',
    type: FilterImageTypeDto,
  })
  @ApiOperation({ summary: 'Get all of the ImageTypes' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [ImageType],
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid page|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No ImageType found',
  })
  find(@Body() filterImageTypeDto: FilterImageTypeDto): Promise<ImageType[]> {
    return this.imageTypeService.find(filterImageTypeDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the ImageType data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: ImageTypeRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No ImageType found',
  })
  findOne(@Param('id') catID: number): Promise<ImageTypeRO> {
    return this.imageTypeService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current ImageType' })
  @ApiBody({
    description: 'UpdateImageTypeDto Schema',
    type: UpdateImageTypeDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current ImageType',
    type: ImageTypeRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid type|Invalid description|Invalid width|Invalid height',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No ImageType found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') imageTypeID: number,
    @Body() UpdateImageTypeDto: UpdateImageTypeDto,
  ): Promise<ImageTypeRO> {
    return this.imageTypeService.update(
      userID,
      imageTypeID,
      UpdateImageTypeDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current ImageType' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current ImageType',
    type: ImageTypeRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No ImageType found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') imageTypeID: number,
  ): Promise<ImageTypeRO> {
    return this.imageTypeService.delete(userID, imageTypeID);
  }
}
