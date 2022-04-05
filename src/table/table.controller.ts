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
import { TableService } from './table.service';
import { Table, TableRO, UpdateTableDto, CreateTableDto } from './dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ValidationPipe } from 'src/shared/pipes/validation.pipe';
import { User } from 'src/user/user.decorator';

@ApiBearerAuth()
@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}

  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Table' })
  @ApiBody({ description: 'CreateTableDto Schema', type: CreateTableDto })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Table',
    type: TableRO,
  })
  @ApiResponse({
    status: 400,
    description: "Host doesn't exist|Table number already exists",
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
    @Body() createTableDto: CreateTableDto,
  ): Promise<TableRO> {
    return this.tableService.create(userID, createTableDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all Tables for the Host' })
  @ApiBody({ description: 'HostID', type: Number })
  @ApiResponse({
    status: 200,
    description: 'Returns Tables for provided Host',
    type: [Table],
  })
  @ApiResponse({
    status: 404,
    description: 'No host found|No Table found',
  })
  findHostTables(@Body('hostID') hostID: number): Promise<Table[]> {
    return this.tableService.findHostTables(hostID);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Table data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the table associated with the table_number field',
    type: TableRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Table found',
  })
  findOne(@Param('id') table_number: number): Promise<TableRO> {
    return this.tableService.findOne(table_number);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update current Table' })
  @ApiBody({ description: 'UpdateTableDto Schema', type: UpdateTableDto })
  @ApiResponse({
    status: 200,
    description: 'Updates current Table',
    type: TableRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Table found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') tableID: number,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<TableRO> {
    return this.tableService.update(userID, tableID, updateTableDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Deletes current Table',
    type: TableRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Table found|No User found',
  })
  @Delete(':id')
  delete(
    @User('id') userID: number,
    @Param('id') tableID: number,
  ): Promise<TableRO> {
    return this.tableService.delete(userID, tableID);
  }
}
