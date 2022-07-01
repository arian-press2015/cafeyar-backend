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
  Query,
} from '@nestjs/common';
import { RoleService } from './role.service';
import {
  Role,
  RoleRO,
  CreateRoleDto,
  UpdateRoleDto,
  FilterRoleDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('role')
@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Role' })
  @ApiBody({
    description: 'CreateRoleDto Schema',
    type: CreateRoleDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Role',
    type: RoleRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Role already exists|Host_id must be a positive number|Title must be a string|Title_fa must be a string|Permissions must be a positive number',
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
    @Body() createRoleDto: CreateRoleDto,
  ): Promise<RoleRO> {
    return this.roleService.create(userID, createRoleDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Role query fields',
    type: FilterRoleDto,
  })
  @ApiOperation({ summary: 'Get all of the Roles' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Role],
  })
  @ApiResponse({
    status: 400,
    description:
      'Host_id must be a positive number|Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Role found',
  })
  find(@Query() filterRoleDto: FilterRoleDto): Promise<Role[]> {
    return this.roleService.find(filterRoleDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Role data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: RoleRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Role found',
  })
  findOne(@Param('id') catID: number): Promise<RoleRO> {
    return this.roleService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Role' })
  @ApiBody({
    description: 'UpdateRoleDto Schema',
    type: UpdateRoleDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Role',
    type: RoleRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Title must be a string|Title_fa must be a string|Permissions must be a positive number',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Role found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') roleID: number,
    @Body() UpdateRoleDto: UpdateRoleDto,
  ): Promise<RoleRO> {
    return this.roleService.update(userID, roleID, UpdateRoleDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Role' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Role',
    type: RoleRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Role found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') roleID: number,
  ): Promise<RoleRO> {
    return this.roleService.delete(userID, roleID);
  }
}
