import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class FilterOwnerDto {
  @ApiProperty({
    example: 2,
    description: 'owner_role_id of the Owner',
  })
  readonly owner_role_id: number;

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
