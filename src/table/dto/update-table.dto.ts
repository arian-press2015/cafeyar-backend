import { ApiProperty } from '@nestjs/swagger';

export class UpdateTableDto {
  @ApiProperty({ example: 4, description: 'Capacity of the Table' })
  readonly capacity: number;
}
