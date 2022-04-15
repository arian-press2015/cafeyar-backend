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
import { OwnerService } from './owner.service';
import {
  Owner,
  OwnerRO,
  CreateOwnerDto,
  UpdateOwnerDto,
  FilterOwnerDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('owner')
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Owner' })
  @ApiBody({
    description: 'CreateOwnerDto Schema',
    type: CreateOwnerDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Owner',
    type: OwnerRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Owner already exists|Invalid user_id|Invalid username|Invalid password|Invalid owner_role_id|Invalid creation_date',
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
    @Body() createOwnerDto: CreateOwnerDto,
  ): Promise<OwnerRO> {
    return this.ownerService.create(userID, createOwnerDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Owner query fields',
    type: FilterOwnerDto,
  })
  @ApiOperation({ summary: 'Get all of the Owners' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Owner],
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid owner_role_id|Invalid page|Invalid limit',
  })
  @ApiResponse({
    status: 404,
    description: 'No Owner found',
  })
  find(@Body() filterOwnerDto: FilterOwnerDto): Promise<Owner[]> {
    return this.ownerService.find(filterOwnerDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Owner data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: OwnerRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Owner found',
  })
  findOne(@Param('id') catID: number): Promise<OwnerRO> {
    return this.ownerService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Owner' })
  @ApiBody({
    description: 'UpdateOwnerDto Schema',
    type: UpdateOwnerDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Owner',
    type: OwnerRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid username|Invalid password|Invalid owner_role_id',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Owner found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') ownerID: number,
    @Body() UpdateOwnerDto: UpdateOwnerDto,
  ): Promise<OwnerRO> {
    return this.ownerService.update(userID, ownerID, UpdateOwnerDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Owner' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Owner',
    type: OwnerRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Owner found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') ownerID: number,
  ): Promise<OwnerRO> {
    return this.ownerService.delete(userID, ownerID);
  }
}
