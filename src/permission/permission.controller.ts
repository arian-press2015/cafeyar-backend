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
import { PermissionService } from './permission.service';
import {
  Permission,
  PermissionRO,
  CreatePermissionDto,
  UpdatePermissionDto,
  FilterPermissionDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('permission')
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Permission' })
  @ApiBody({
    description: 'CreatePermissionDto Schema',
    type: CreatePermissionDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Permission',
    type: PermissionRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Permission already exists|Title must be a string|Title_fa must be a string|Destination must be a string',
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
    @Body() createPermissionDto: CreatePermissionDto,
  ): Promise<PermissionRO> {
    return this.permissionService.create(userID, createPermissionDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Permission query fields',
    type: FilterPermissionDto,
  })
  @ApiOperation({ summary: 'Get all of the Permissions' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Permission],
  })
  @ApiResponse({
    status: 400,
    description:
      'Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Permission found',
  })
  find(
    @Body() filterPermissionDto: FilterPermissionDto,
  ): Promise<Permission[]> {
    return this.permissionService.find(filterPermissionDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Permission data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: PermissionRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Permission found',
  })
  findOne(@Param('id') catID: number): Promise<PermissionRO> {
    return this.permissionService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Permission' })
  @ApiBody({
    description: 'UpdatePermissionDto Schema',
    type: UpdatePermissionDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Permission',
    type: PermissionRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Title must be a string|Title_fa must be a string|Destination must be a string',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Permission found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') permissionID: number,
    @Body() UpdatePermissionDto: UpdatePermissionDto,
  ): Promise<PermissionRO> {
    return this.permissionService.update(
      userID,
      permissionID,
      UpdatePermissionDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Permission' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Permission',
    type: PermissionRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Permission found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') permissionID: number,
  ): Promise<PermissionRO> {
    return this.permissionService.delete(userID, permissionID);
  }
}
