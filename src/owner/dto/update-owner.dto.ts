import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive, IsString } from 'class-validator';

export class UpdateOwnerDto {
  @IsOptional()
  @IsString({ message: 'Invalid username' })
  @ApiProperty({ example: 'ap2015', description: 'Username of the Owner' })
  readonly username?: string;

  @IsOptional()
  @IsString({ message: 'Invalid Password' })
  @ApiProperty({ example: 'ap2015', description: 'Password of the Owner' })
  readonly password?: string;

  @IsOptional()
  @IsInt({ message: 'Invalid owner_role_id' })
  @IsPositive({ message: 'Invalid owner_role_id' })
  @ApiProperty({
    example: 2,
    description: 'owner_role_id of the Owner',
  })
  readonly owner_role_id?: number;
}
