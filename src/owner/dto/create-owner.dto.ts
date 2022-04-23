import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsPositive, IsString } from 'class-validator';

export class CreateOwnerDto {
  @IsInt({ message: 'User_id must be a positive number' })
  @IsPositive({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Owner',
  })
  readonly user_id: number;

  @IsString({ message: 'Invalid username' })
  @ApiProperty({ example: 'ap2015', description: 'Username of the Owner' })
  readonly username: string;

  @IsString({ message: 'Invalid Password' })
  @ApiProperty({ example: 'ap2015', description: 'Password of the Owner' })
  readonly password: string;

  @IsInt({ message: 'Owner_role_id must be a positive number' })
  @IsPositive({ message: 'Owner_role_id must be a positive number' })
  @ApiProperty({
    example: 2,
    description: 'owner_role_id of the Owner',
  })
  readonly owner_role_id: number;

  @IsDateString({}, { message: 'Invalid creation_date' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'creation_date of the Owner',
  })
  readonly creation_date: string;
}
