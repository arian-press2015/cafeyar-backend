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
import { TipService } from './tip.service';
import {
  Tip,
  TipRO,
  CreateTipDto,
  UpdateTipDto,
  FilterTipDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('tip')
@Controller('tip')
export class TipController {
  constructor(private readonly tipService: TipService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Tip' })
  @ApiBody({
    description: 'CreateTipDto Schema',
    type: CreateTipDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Tip',
    type: TipRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Tip already exists|Order_id must be a positive number|User_id must be a positive number|Tip amount must be a positive number|Tip count must be a positive number|Personnel must be a positive number',
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
    @Body() createTipDto: CreateTipDto,
  ): Promise<TipRO> {
    return this.tipService.create(userID, createTipDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Tip query fields',
    type: FilterTipDto,
  })
  @ApiOperation({ summary: 'Get all of the Tips' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Tip],
  })
  @ApiResponse({
    status: 400,
    description:
      'Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Tip found',
  })
  find(@Query() filterTipDto: FilterTipDto): Promise<Tip[]> {
    return this.tipService.find(filterTipDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Tip data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: TipRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Tip found',
  })
  findOne(@Param('id') catID: number): Promise<TipRO> {
    return this.tipService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Tip' })
  @ApiBody({
    description: 'UpdateTipDto Schema',
    type: UpdateTipDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Tip',
    type: TipRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Tip amount must be a positive number|Tip count must be a positive number|Personnel must be a positive number',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Tip found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') tipID: number,
    @Body() UpdateTipDto: UpdateTipDto,
  ): Promise<TipRO> {
    return this.tipService.update(userID, tipID, UpdateTipDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Tip' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Tip',
    type: TipRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Tip found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') tipID: number,
  ): Promise<TipRO> {
    return this.tipService.delete(userID, tipID);
  }
}
