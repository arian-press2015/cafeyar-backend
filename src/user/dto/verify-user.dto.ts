import { IsMobilePhone, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyUserDto {
  @IsNumberString()
  @ApiProperty({ example: '12345', description: 'Validation code sent as SMS' })
  readonly otp: string;

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
