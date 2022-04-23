import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterOwnerDto {
  @IsOptional()
  @IsInt({ message: 'Owner_role_id must be a positive number' })
  @IsPositive({ message: 'Owner_role_id must be a positive number' })
  @ApiProperty({
    example: 2,
    description: 'owner_role_id of the Owner',
  })
  readonly owner_role_id?: number;

  @IsInt({ message: 'Page must be a positive number' })
  @IsPositive({ message: 'Page must be a positive number' })
  @ApiProperty({
    example: 3,
    description: 'page of versions',
  })
  readonly page: number;

  @IsInt({ message: 'Limit must be a positive number' })
  @IsPositive({ message: 'Limit must be a positive number' })
  @ApiProperty({
    example: 10,
    description: 'limit of versions',
  })
  readonly limit: number;
}
