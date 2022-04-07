import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
} from '@nestjs/common';
import { PurchaseLifetimeService } from './purchaseLifetime.service';
import {
  PurchaseLifetime,
  PurchaseLifetimeRO,
  CreatePurchaseLifetimeDto,
  UpdatePurchaseLifetimeDto,
  FilterPurchaseLifetimeDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
import { User } from 'src/user/user.decorator';

@ApiTags('purchase-lifetime')
@Controller('purchase-lifetime')
export class PurchaseLifetimeController {
  constructor(
    private readonly purchaseLifetimeService: PurchaseLifetimeService,
  ) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new PurchaseLifetime' })
  @ApiBody({
    description: 'CreatePurchaseLifetimeDto Schema',
    type: CreatePurchaseLifetimeDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new PurchaseLifetime',
    type: PurchaseLifetimeRO,
  })
  @ApiResponse({
    status: 400,
    description: 'PurchaseLifetime already exists',
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
    @Body() createPurchaseLifetimeDto: CreatePurchaseLifetimeDto,
  ): Promise<PurchaseLifetimeRO> {
    return this.purchaseLifetimeService.create(
      userID,
      createPurchaseLifetimeDto,
    );
  }

  @Get()
  @ApiBody({
    description: 'PurchaseLifetime query fields',
    type: FilterPurchaseLifetimeDto,
  })
  @ApiOperation({ summary: 'Get all of the PurchaseLifetimes' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [PurchaseLifetime],
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseLifetime found',
  })
  find(
    @Body() filterPurchaseLifetimeDto: FilterPurchaseLifetimeDto,
  ): Promise<PurchaseLifetime[]> {
    return this.purchaseLifetimeService.find(filterPurchaseLifetimeDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the PurchaseLifetime data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: PurchaseLifetimeRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseLifetime found',
  })
  findOne(@Param('id') catID: number): Promise<PurchaseLifetimeRO> {
    return this.purchaseLifetimeService.findOne(catID);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current PurchaseLifetime' })
  @ApiBody({
    description: 'UpdatePurchaseLifetimeDto Schema',
    type: UpdatePurchaseLifetimeDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current PurchaseLifetime',
    type: PurchaseLifetimeRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseLifetime found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') purchaseLifetimeID: number,
    @Body() UpdatePurchaseLifetimeDto: UpdatePurchaseLifetimeDto,
  ): Promise<PurchaseLifetimeRO> {
    return this.purchaseLifetimeService.update(
      userID,
      purchaseLifetimeID,
      UpdatePurchaseLifetimeDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current PurchaseLifetime' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current PurchaseLifetime',
    type: PurchaseLifetimeRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No PurchaseLifetime found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') purchaseLifetimeID: number,
  ): Promise<PurchaseLifetimeRO> {
    return this.purchaseLifetimeService.delete(userID, purchaseLifetimeID);
  }
}
