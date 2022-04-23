import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class FilterPersonnelDto {
  @IsOptional()
  @IsInt({ message: 'Host_id must be a positive number' })
  @IsPositive({ message: 'Host_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Personnel',
  })
  readonly host_id?: number;

  @IsOptional()
  @IsInt({ message: 'Role_id must be a positive number' })
  @IsPositive({ message: 'Role_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'role_id of the Personnel',
  })
  readonly role_id?: number;

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
