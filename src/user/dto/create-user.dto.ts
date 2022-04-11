import { ApiProperty } from '@nestjs/swagger';
import { IsMobilePhone, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
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
  readonly phone: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    example: 'ap2015',
    description: '(optional) introduction code',
  })
  readonly introduction?: string;
}
