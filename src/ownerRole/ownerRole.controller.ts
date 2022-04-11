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
import { OwnerRoleService } from './ownerRole.service';
import {
  OwnerRole,
  OwnerRoleRO,
  CreateOwnerRoleDto,
  UpdateOwnerRoleDto,
  FilterOwnerRoleDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('owner-role')
@Controller('owner-role')
export class OwnerRoleController {
  constructor(private readonly ownerRoleService: OwnerRoleService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new OwnerRole' })
  @ApiBody({
    description: 'CreateOwnerRoleDto Schema',
    type: CreateOwnerRoleDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new OwnerRole',
    type: OwnerRoleRO,
  })
  @ApiResponse({
    status: 400,
    description: 'OwnerRole already exists',
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
    @Body() createOwnerRoleDto: CreateOwnerRoleDto,
  ): Promise<OwnerRoleRO> {
    return this.ownerRoleService.create(userID, createOwnerRoleDto);
  }

  @Get()
  @ApiBody({
    description: 'OwnerRole query fields',
    type: FilterOwnerRoleDto,
  })
  @ApiOperation({ summary: 'Get all of the OwnerRoles' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [OwnerRole],
  })
  @ApiResponse({
    status: 404,
    description: 'No OwnerRole found',
  })
  find(@Body() filterOwnerRoleDto: FilterOwnerRoleDto): Promise<OwnerRole[]> {
    return this.ownerRoleService.find(filterOwnerRoleDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the OwnerRole data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: OwnerRoleRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No OwnerRole found',
  })
  findOne(@Param('id') catID: number): Promise<OwnerRoleRO> {
    return this.ownerRoleService.findOne(catID);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current OwnerRole' })
  @ApiBody({
    description: 'UpdateOwnerRoleDto Schema',
    type: UpdateOwnerRoleDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current OwnerRole',
    type: OwnerRoleRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No OwnerRole found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') ownerRoleID: number,
    @Body() UpdateOwnerRoleDto: UpdateOwnerRoleDto,
  ): Promise<OwnerRoleRO> {
    return this.ownerRoleService.update(
      userID,
      ownerRoleID,
      UpdateOwnerRoleDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current OwnerRole' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current OwnerRole',
    type: OwnerRoleRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No OwnerRole found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') ownerRoleID: number,
  ): Promise<OwnerRoleRO> {
    return this.ownerRoleService.delete(userID, ownerRoleID);
  }
}
