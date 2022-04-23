import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateTableDto {
  @IsInt({ message: 'Host_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Table',
  })
  readonly host_id: number;

  @IsInt({ message: 'Capacity must be a positive number' })
  @ApiProperty({ example: 4, description: 'Capacity of the Table' })
  readonly capacity: number;

  @IsInt({ message: 'Table_number must be a positive number' })
  @ApiProperty({
    example: 12,
    description: 'Number of the Table',
  })
  readonly table_number: number;
}
