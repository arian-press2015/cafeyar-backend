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
import { HostImageService } from './hostImage.service';
import {
  HostImage,
  HostImageRO,
  CreateHostImageDto,
  UpdateHostImageDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('host-image')
@Controller('host-image')
export class HostImageController {
  constructor(private readonly hostImageService: HostImageService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new HostImage' })
  @ApiBody({
    description: 'CreateHostImageDto Schema',
    type: CreateHostImageDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new HostImage',
    type: HostImageRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'HostImage already exists|Invalid host_id|Invalid width|Invalid height|Invalid url',
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
    @Body() createHostImageDto: CreateHostImageDto,
  ): Promise<HostImageRO> {
    return this.hostImageService.create(userID, createHostImageDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the HostImage data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: HostImageRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No HostImage found',
  })
  findOne(@Param('id') catID: number): Promise<HostImageRO> {
    return this.hostImageService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current HostImage' })
  @ApiBody({
    description: 'UpdateHostImageDto Schema',
    type: UpdateHostImageDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current HostImage',
    type: HostImageRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid host_id|Invalid width|Invalid height|Invalid url',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No HostImage found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') hostImageID: number,
    @Body() UpdateHostImageDto: UpdateHostImageDto,
  ): Promise<HostImageRO> {
    return this.hostImageService.update(
      userID,
      hostImageID,
      UpdateHostImageDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current HostImage' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current HostImage',
    type: HostImageRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No HostImage found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') hostImageID: number,
  ): Promise<HostImageRO> {
    return this.hostImageService.delete(userID, hostImageID);
  }
}
