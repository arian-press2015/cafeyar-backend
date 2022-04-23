import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class CreatePersonnelDto {
  @IsInt({ message: 'User_id must be a positive number' })
  @IsPositive({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Personnel',
  })
  readonly user_id: number;

  @IsInt({ message: 'Host_id must be a positive number' })
  @IsPositive({ message: 'Host_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Personnel',
  })
  readonly host_id: number;

  @IsInt({ message: 'Invalid role_id' })
  @IsPositive({ message: 'Invalid role_id' })
  @ApiProperty({
    example: 123,
    description: 'role_id of the Personnel',
  })
  readonly role_id: number;
}
