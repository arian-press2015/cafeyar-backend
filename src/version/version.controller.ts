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
import { VersionService } from './version.service';
import {
  Version,
  VersionRO,
  CreateVersionDto,
  UpdateVersionDto,
  FilterVersionDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('version')
@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Version' })
  @ApiBody({
    description: 'CreateVersionDto Schema',
    type: CreateVersionDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Version',
    type: VersionRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Version_number already taken|Version must be number|Invalid creation_date',
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
    @Body() createVersionDto: CreateVersionDto,
  ): Promise<VersionRO> {
    return this.versionService.create(userID, createVersionDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Version query fields',
    type: FilterVersionDto,
  })
  @ApiOperation({ summary: 'Get all of the Versions' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Version],
  })
  @ApiResponse({
    status: 400,
    description:
      'Version must be number|Limit must be a positive number|Page must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Version found',
  })
  find(@Body() filterVersionDto: FilterVersionDto): Promise<Version[]> {
    return this.versionService.find(filterVersionDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Version data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: VersionRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Version found',
  })
  findOne(@Param('id') catID: number): Promise<VersionRO> {
    return this.versionService.findOne(catID);
  }

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Version' })
  @ApiBody({
    description: 'UpdateVersionDto Schema',
    type: UpdateVersionDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Version',
    type: VersionRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Version must be number',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Version found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') versionID: number,
    @Body() UpdateVersionDto: UpdateVersionDto,
  ): Promise<VersionRO> {
    return this.versionService.update(userID, versionID, UpdateVersionDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Version' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Version',
    type: VersionRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Version found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') versionID: number,
  ): Promise<VersionRO> {
    return this.versionService.delete(userID, versionID);
  }
}
