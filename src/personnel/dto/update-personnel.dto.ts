import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdatePersonnelDto {
  @IsOptional()
  @IsInt({ message: 'User_id must be a positive number' })
  @IsPositive({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Personnel',
  })
  readonly user_id?: number;

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
}
