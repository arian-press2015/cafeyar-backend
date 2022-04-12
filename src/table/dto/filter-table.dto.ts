import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class FilterTableDto {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly hostID: number;

  @IsInt({ message: 'Invalid page' })
  @IsPositive({ message: 'Invalid page' })
  @ApiProperty({
    example: 3,
    description: 'page of versions',
  })
  readonly page: number;

  @IsInt({ message: 'Invalid limit' })
  @IsPositive({ message: 'Invalid limit' })
  @ApiProperty({
    example: 10,
    description: 'limit of versions',
  })
  readonly limit: number;
}
