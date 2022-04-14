import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class UpdateTableDto {
  @IsInt({ message: 'Invalid capacity' })
  @ApiProperty({ example: 4, description: 'Capacity of the Table' })
  readonly capacity: number;
}
