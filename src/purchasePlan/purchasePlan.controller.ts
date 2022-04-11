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
import { PurchasePlanService } from './purchasePlan.service';
import {
  PurchasePlan,
  PurchasePlanRO,
  CreatePurchasePlanDto,
  UpdatePurchasePlanDto,
  FilterPurchasePlanDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('purchase-plan')
@Controller('purchase-plan')
export class PurchasePlanController {
  constructor(private readonly purchasePlanService: PurchasePlanService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new PurchasePlan' })
  @ApiBody({
    description: 'CreatePurchasePlanDto Schema',
    type: CreatePurchasePlanDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new PurchasePlan',
    type: PurchasePlanRO,
  })
  @ApiResponse({
    status: 400,
    description: 'PurchasePlan already exists',
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
    @Body() createPurchasePlanDto: CreatePurchasePlanDto,
  ): Promise<PurchasePlanRO> {
    return this.purchasePlanService.create(userID, createPurchasePlanDto);
  }

  @Get()
  @ApiBody({
    description: 'PurchasePlan query fields',
    type: FilterPurchasePlanDto,
  })
  @ApiOperation({ summary: 'Get all of the PurchasePlans' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [PurchasePlan],
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchasePlan found',
  })
  find(
    @Body() filterPurchasePlanDto: FilterPurchasePlanDto,
  ): Promise<PurchasePlan[]> {
    return this.purchasePlanService.find(filterPurchasePlanDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the PurchasePlan data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: PurchasePlanRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchasePlan found',
  })
  findOne(@Param('id') catID: number): Promise<PurchasePlanRO> {
    return this.purchasePlanService.findOne(catID);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current PurchasePlan' })
  @ApiBody({
    description: 'UpdatePurchasePlanDto Schema',
    type: UpdatePurchasePlanDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current PurchasePlan',
    type: PurchasePlanRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchasePlan found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') purchasePlanID: number,
    @Body() UpdatePurchasePlanDto: UpdatePurchasePlanDto,
  ): Promise<PurchasePlanRO> {
    return this.purchasePlanService.update(
      userID,
      purchasePlanID,
      UpdatePurchasePlanDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current PurchasePlan' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current PurchasePlan',
    type: PurchasePlanRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchasePlan found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') purchasePlanID: number,
  ): Promise<PurchasePlanRO> {
    return this.purchasePlanService.delete(userID, purchasePlanID);
  }
}
