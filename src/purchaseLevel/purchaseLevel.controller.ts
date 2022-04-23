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
import { PurchaseLevelService } from './purchaseLevel.service';
import {
  PurchaseLevel,
  PurchaseLevelRO,
  CreatePurchaseLevelDto,
  UpdatePurchaseLevelDto,
  FilterPurchaseLevelDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('purchase-level')
@Controller('purchase-level')
export class PurchaseLevelController {
  constructor(private readonly purchaseLevelService: PurchaseLevelService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new PurchaseLevel' })
  @ApiBody({
    description: 'CreatePurchaseLevelDto Schema',
    type: CreatePurchaseLevelDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new PurchaseLevel',
    type: PurchaseLevelRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'PurchaseLevel already exists|Invalid title|Invalid price|Invalid features',
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
    @Body() createPurchaseLevelDto: CreatePurchaseLevelDto,
  ): Promise<PurchaseLevelRO> {
    return this.purchaseLevelService.create(userID, createPurchaseLevelDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'PurchaseLevel query fields',
    type: FilterPurchaseLevelDto,
  })
  @ApiOperation({ summary: 'Get all of the PurchaseLevels' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [PurchaseLevel],
  })
  @ApiResponse({
    status: 400,
    description:
      'Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseLevel found',
  })
  find(
    @Body() filterPurchaseLevelDto: FilterPurchaseLevelDto,
  ): Promise<PurchaseLevel[]> {
    return this.purchaseLevelService.find(filterPurchaseLevelDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the PurchaseLevel data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: PurchaseLevelRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseLevel found',
  })
  findOne(@Param('id') catID: number): Promise<PurchaseLevelRO> {
    return this.purchaseLevelService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current PurchaseLevel' })
  @ApiBody({
    description: 'UpdatePurchaseLevelDto Schema',
    type: UpdatePurchaseLevelDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current PurchaseLevel',
    type: PurchaseLevelRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid title|Invalid price|Invalid features',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseLevel found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') purchaseLevelID: number,
    @Body() UpdatePurchaseLevelDto: UpdatePurchaseLevelDto,
  ): Promise<PurchaseLevelRO> {
    return this.purchaseLevelService.update(
      userID,
      purchaseLevelID,
      UpdatePurchaseLevelDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current PurchaseLevel' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current PurchaseLevel',
    type: PurchaseLevelRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseLevel found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') purchaseLevelID: number,
  ): Promise<PurchaseLevelRO> {
    return this.purchaseLevelService.delete(userID, purchaseLevelID);
  }
}
