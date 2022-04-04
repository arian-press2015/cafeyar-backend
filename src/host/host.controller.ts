import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { HostService } from './host.service';
import { CreateHostDto, UpdateHostDto, HostRO, Host } from './dto';
import { ValidationPipe } from '../shared/pipes/validation.pipe';
import { User } from 'src/user/user.decorator';

@ApiBearerAuth()
@ApiTags('host')
@Controller('host')
export class HostController {
  constructor(private readonly hostService: HostService) {}

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
    description: 'Name already exists|Phone number already exists',
  })
  async create(
    @User('id') userID: number,
    @Body() hostData: CreateHostDto,
  ): Promise<HostRO> {
    return await this.hostService.create(userID, hostData);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update current Host' })
  @ApiBody({ description: 'UpdateHostDto Schema', type: UpdateHostDto })
  @ApiResponse({
    status: 200,
    description: 'Updates current Host',
    type: HostRO,
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
