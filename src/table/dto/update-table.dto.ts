import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateTableDto {
  @IsOptional()
  @IsInt({ message: 'Capacity must be a positive number' })
  @ApiProperty({ example: 4, description: 'Capacity of the Table' })
  readonly capacity?: number;
}
