import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '09012883045',
    description: 'Phone number of the User',
  })
  readonly phone: string;
}
