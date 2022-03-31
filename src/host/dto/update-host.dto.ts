import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateHostDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'APCafe', description: 'Name of the Host' })
  readonly name: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '03146258582',
    description: 'Phone number of the Host',
  })
  readonly phone: string;

  @ApiProperty({ example: 'somewhere', description: 'Address of the Host' })
  readonly address?: string;

  @ApiProperty({
    example: 'blah-blah-blah',
    description: 'description of the Host',
  })
  readonly description?: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '10:30:00',
    description: 'opening time',
  })
  readonly opening_time: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '20:30:00',
    description: 'closing time',
  })
  readonly closing_time: string;
}
