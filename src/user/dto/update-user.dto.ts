import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    example: '09012883045',
    description: 'Phone number of the User',
  })
  readonly phone: string;

  @ApiProperty({ example: 'AP2015', description: 'Name of the User' })
  readonly name?: string;

  @ApiProperty({ example: 'AP2015', description: 'Last name of the User' })
  readonly last?: string;

  @ApiProperty({ example: 25, description: 'Age of the User' })
  readonly age?: number;

  @ApiProperty({
    enum: ['male', 'female', 'other'],
    description: 'Gender of the User',
  })
  readonly gender?: string;
}
