import { ApiProperty } from '@nestjs/swagger';

export class CreateTableDto {
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
