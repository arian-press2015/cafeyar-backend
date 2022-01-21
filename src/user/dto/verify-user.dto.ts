import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyUserDto {
  @IsNotEmpty()
  @ApiProperty({ example: '12345', description: 'Validation code sent as SMS' })
  readonly otp: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '09012883045',
    description: 'Phone number of the User',
  })
  readonly phone: string;
}
