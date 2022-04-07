import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @ApiProperty({
    example: '09012883045',
    description: 'Phone number of the User',
  })
  readonly phone: string;

  @IsOptional()
  @ApiProperty({
    example: 'ap2015',
    description: '(optional) introduction code',
  })
  readonly introduction?: string;
}
