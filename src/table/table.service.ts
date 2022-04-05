import { Injectable } from '@nestjs/common';
import {
  CreateTableDto,
  FilterTableDto,
  Table,
  TableRO,
  UpdateTableDto,
} from './dto';

@Injectable()
export class TableService {
  async create(
    userID: number,
    createTableDto: CreateTableDto,
  ): Promise<TableRO> {
    const table = {
      id: 1,
      host_id: 1,
      capacity: 4,
      table_number: 1,
    };
    return { table };
  }

  async findHostTables(dto: FilterTableDto): Promise<Table[]> {
    const table = [];
    table.push({
      id: 1,
      host_id: 1,
      capacity: 4,
      table_number: 1,
    });
    return table;
  }

  async findOne(tableID: number): Promise<TableRO> {
    const table = {
      id: 1,
      host_id: 1,
      capacity: 4,
      table_number: 1,
    };
    return { table };
  }

  async update(
    userID: number,
    tableID: number,
    updateTableDto: UpdateTableDto,
  ): Promise<TableRO> {
    const table = {
      id: 1,
      host_id: 1,
      capacity: 4,
      table_number: 1,
    };
    return { table };
  }

  async delete(userID: number, tableID: number): Promise<TableRO> {
    const table = {
      id: 1,
      host_id: 1,
      capacity: 4,
      table_number: 1,
    };
    return { table };
  }
}
