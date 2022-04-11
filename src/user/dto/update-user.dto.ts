import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsInt,
  IsMobilePhone,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsMobilePhone(
    'fa-IR',
    { strictMode: true },
    {
      message: 'Phone number is not valid',
    },
  )
  @ApiProperty({
    example: '+989012883045',
    description: 'Phone number of the User',
  })
  readonly phone?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'AP2015', description: 'Name of the User' })
  readonly name?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'AP2015', description: 'Last name of the User' })
  readonly last?: string;

  @IsOptional()
  @IsInt()
  @Min(15)
  @ApiProperty({ example: 25, description: 'Age of the User' })
  readonly age?: number;

  @IsOptional()
  @IsString()
  @IsIn(['male', 'female', 'other'])
  @ApiProperty({
    enum: ['male', 'female', 'other'],
    description: 'Gender of the User',
  })
  readonly gender?: string;
}
