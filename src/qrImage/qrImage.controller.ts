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
import { QrImageService } from './qrImage.service';
import {
  QrImage,
  QrImageRO,
  CreateQrImageDto,
  UpdateQrImageDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('qr-image')
@Controller('qr-image')
export class QrImageController {
  constructor(private readonly qrImageService: QrImageService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new QrImage' })
  @ApiBody({
    description: 'CreateQrImageDto Schema',
    type: CreateQrImageDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new QrImage',
    type: QrImageRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'QrImage already exists|User_id must be a positive number|Invalid width|Invalid height|Invalid url',
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
    @Body() createQrImageDto: CreateQrImageDto,
  ): Promise<QrImageRO> {
    return this.qrImageService.create(userID, createQrImageDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the QrImage data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: QrImageRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No QrImage found',
  })
  findOne(@Param('id') catID: number): Promise<QrImageRO> {
    return this.qrImageService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current QrImage' })
  @ApiBody({
    description: 'UpdateQrImageDto Schema',
    type: UpdateQrImageDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current QrImage',
    type: QrImageRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid width|Invalid height|Invalid url',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No QrImage found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') qrImageID: number,
    @Body() UpdateQrImageDto: UpdateQrImageDto,
  ): Promise<QrImageRO> {
    return this.qrImageService.update(userID, qrImageID, UpdateQrImageDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current QrImage' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current QrImage',
    type: QrImageRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No QrImage found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') qrImageID: number,
  ): Promise<QrImageRO> {
    return this.qrImageService.delete(userID, qrImageID);
  }
}
