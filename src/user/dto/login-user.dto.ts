import { IsMobilePhone } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
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
}
