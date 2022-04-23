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
import { RateService } from './rate.service';
import {
  Rate,
  RateRO,
  CreateRateDto,
  UpdateRateDto,
  FilterRateDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('rate')
@Controller('rate')
export class RateController {
  constructor(private readonly rateService: RateService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Rate' })
  @ApiBody({
    description: 'CreateRateDto Schema',
    type: CreateRateDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Rate',
    type: RateRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Rate already exists|User_id must be a positive number|Invalid host_id|Invalid host_point|Invalid personnel_point|Invalid quality_point|Destination must be a string',
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
    @Body() createRateDto: CreateRateDto,
  ): Promise<RateRO> {
    return this.rateService.create(userID, createRateDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Rate query fields',
    type: FilterRateDto,
  })
  @ApiOperation({ summary: 'Get all of the Rates' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Rate],
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid host_id|Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Rate found',
  })
  find(@Body() filterRateDto: FilterRateDto): Promise<Rate[]> {
    return this.rateService.find(filterRateDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Rate data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: RateRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Rate found',
  })
  findOne(@Param('id') catID: number): Promise<RateRO> {
    return this.rateService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Rate' })
  @ApiBody({
    description: 'UpdateRateDto Schema',
    type: UpdateRateDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Rate',
    type: RateRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid host_point|Invalid personnel_point|Invalid quality_point|Destination must be a string',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Rate found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') rateID: number,
    @Body() UpdateRateDto: UpdateRateDto,
  ): Promise<RateRO> {
    return this.rateService.update(userID, rateID, UpdateRateDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Rate' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Rate',
    type: RateRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Rate found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') rateID: number,
  ): Promise<RateRO> {
    return this.rateService.delete(userID, rateID);
  }
}
