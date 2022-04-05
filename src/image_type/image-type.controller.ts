import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { ImageTypeService } from './image-type.service';
import {
  CreateImageTypeDto,
  UpdateImageTypeDto,
  FilterImageTypeDto,
  ImageType,
  ImageTypeRO,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
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
    description: 'ImageType already exists',
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

  @Get()
  @ApiBody({
    description: 'image-type query fields',
    type: FilterImageTypeDto,
  })
  @ApiOperation({ summary: 'Get all of the ImageTypes' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the ImageTypes',
    type: [ImageType],
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
  findOne(@Param('id') image_number: number): Promise<ImageTypeRO> {
    return this.imageTypeService.findOne(image_number);
  }

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
  @Delete(':id')
  delete(
    @User('id') userID: number,
    @Param('id') imageTypeID: number,
  ): Promise<ImageTypeRO> {
    return this.imageTypeService.delete(userID, imageTypeID);
  }
}
