import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { HostService } from './host.service';
import {
  CreateHostDto,
  UpdateHostDto,
  FilterHostDto,
  HostRO,
  Host,
} from './dto';

import { User } from 'src/user/user.decorator';

@ApiTags('host')
@Controller('host')
export class HostController {
  constructor(private readonly hostService: HostService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post('')
  @ApiOperation({ summary: 'Create new Host' })
  @ApiBody({ description: 'CreateHostDto Schema', type: CreateHostDto })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Host',
    type: HostRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Name already exists|Phone number already taken|Name must be a string|Invalid phone|Invalid address|Invalid description|Invalid opening_time|Invalid closing_time',
  })
  async create(
    @User('id') userID: number,
    @Body() hostData: CreateHostDto,
  ): Promise<HostRO> {
    return await this.hostService.create(userID, hostData);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a Host data' })
  @ApiResponse({
    status: 200,
    description: 'Returns a Host for provided id',
    type: [Host],
  })
  async findOne(@Param('id') hostID: number): Promise<HostRO> {
    return await this.hostService.findOne(hostID);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Category query fields',
    type: FilterHostDto,
  })
  @ApiOperation({ summary: 'Get all Hosts data' })
  @ApiResponse({
    status: 200,
    description: 'Returns all Hosts for provided filterHostDto',
    type: [Host],
  })
  @ApiResponse({
    status: 400,
    description:
      'Page must be a positive number|Limit must be a positive number',
  })
  async find(@Body() filterHostDto: FilterHostDto): Promise<Host[]> {
    return await this.hostService.find(filterHostDto);
  }

  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: 'Get My Host data' })
  @ApiResponse({
    status: 200,
    description: 'Returns owned Hosts for provided Auth Token',
    type: [Host],
  })
  async findMine(@User('id') userID: number): Promise<Host[]> {
    return await this.hostService.findMyHosts(userID);
  }

  @ApiBearerAuth()
  @Get('accesible')
  @ApiOperation({ summary: 'Get accesible Host data' })
  @ApiResponse({
    status: 200,
    description: 'Returns accesible Hosts for provided Auth Token',
    type: [Host],
  })
  async findAllowed(@User('id') userID: number): Promise<Host[]> {
    return await this.hostService.findAccesibleHosts(userID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Host' })
  @ApiBody({ description: 'UpdateHostDto Schema', type: UpdateHostDto })
  @ApiResponse({
    status: 200,
    description: 'Updates current Host',
    type: HostRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Name already exists|Name must be a string|Invalid phone|Invalid address|Invalid description|Invalid opening_time|Invalid closing_time',
  })
  @ApiResponse({
    status: 404,
    description: 'No host found',
  })
  async update(
    @User('id') userID: number,
    @Param('id') hostID: number,
    @Body() hostData: UpdateHostDto,
  ): Promise<HostRO> {
    return await this.hostService.update(userID, hostID, hostData);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Host' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Host',
    type: HostRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No host found',
  })
  async delete(
    @User('id') userID: number,
    @Param('hostID') hostID: number,
  ): Promise<HostRO> {
    return await this.hostService.delete(userID, hostID);
  }
}
