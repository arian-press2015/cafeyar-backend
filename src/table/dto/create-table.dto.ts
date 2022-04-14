import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateTableDto {
  @IsInt({ message: 'Invalid host_id' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Table',
  })
  readonly host_id: number;

  @IsInt({ message: 'Invalid capacity' })
  @ApiProperty({ example: 4, description: 'Capacity of the Table' })
  readonly capacity: number;

  @IsInt({ message: 'Invalid table_number' })
  @ApiProperty({
    example: 12,
    description: 'Number of the Table',
  })
  readonly table_number: number;
}
