import { ApiProperty } from '@nestjs/swagger';

export class Table {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'host_id of the Table',
  })
  readonly host_id: number;

  @ApiProperty({ example: 4, description: 'Capacity of the Table' })
  readonly capacity: number;

  @ApiProperty({
    example: 12,
    description: 'Number of the Table',
  })
  readonly table_number: number;
}

export class TableRO {
  table: Table;
}
