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
import { OwnerPermissionService } from './ownerPermission.service';
import {
  OwnerPermission,
  OwnerPermissionRO,
  CreateOwnerPermissionDto,
  UpdateOwnerPermissionDto,
  FilterOwnerPermissionDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('owner-permission')
@Controller('owner-permission')
export class OwnerPermissionController {
  constructor(
    private readonly ownerPermissionService: OwnerPermissionService,
  ) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new OwnerPermission' })
  @ApiBody({
    description: 'CreateOwnerPermissionDto Schema',
    type: CreateOwnerPermissionDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new OwnerPermission',
    type: OwnerPermissionRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'OwnerPermission already exists|Invalid title|Invalid title_fa|Invalid description',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have ownerPermission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No User found',
  })
  create(
    @User('id') userID: number,
    @Body() createOwnerPermissionDto: CreateOwnerPermissionDto,
  ): Promise<OwnerPermissionRO> {
    return this.ownerPermissionService.create(userID, createOwnerPermissionDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'OwnerPermission query fields',
    type: FilterOwnerPermissionDto,
  })
  @ApiOperation({ summary: 'Get all of the OwnerPermissions' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [OwnerPermission],
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid page|Invalid limit',
  })
  @ApiResponse({
    status: 404,
    description: 'No OwnerPermission found',
  })
  find(
    @Body() filterOwnerPermissionDto: FilterOwnerPermissionDto,
  ): Promise<OwnerPermission[]> {
    return this.ownerPermissionService.find(filterOwnerPermissionDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the OwnerPermission data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: OwnerPermissionRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No OwnerPermission found',
  })
  findOne(@Param('id') catID: number): Promise<OwnerPermissionRO> {
    return this.ownerPermissionService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current OwnerPermission' })
  @ApiBody({
    description: 'UpdateOwnerPermissionDto Schema',
    type: UpdateOwnerPermissionDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current OwnerPermission',
    type: OwnerPermissionRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid title|Invalid title_fa|Invalid description',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have ownerPermission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No OwnerPermission found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') ownerPermissionID: number,
    @Body() UpdateOwnerPermissionDto: UpdateOwnerPermissionDto,
  ): Promise<OwnerPermissionRO> {
    return this.ownerPermissionService.update(
      userID,
      ownerPermissionID,
      UpdateOwnerPermissionDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current OwnerPermission' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current OwnerPermission',
    type: OwnerPermissionRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have ownerPermission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No OwnerPermission found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') ownerPermissionID: number,
  ): Promise<OwnerPermissionRO> {
    return this.ownerPermissionService.delete(userID, ownerPermissionID);
  }
}
