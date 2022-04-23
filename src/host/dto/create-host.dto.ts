import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHostDto {
  @IsString({ message: 'Name must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Host' })
  readonly name: string;

  @IsString({ message: 'Invalid phone' })
  @ApiProperty({
    example: '03146258582',
    description: 'Phone number of the Host',
  })
  readonly phone: string;

  @IsOptional()
  @IsString({ message: 'Invalid address' })
  @ApiProperty({ example: 'somewhere', description: 'Address of the Host' })
  readonly address?: string;

  @IsOptional()
  @IsString({ message: 'Destination must be a string' })
  @ApiProperty({
    example: 'blah-blah-blah',
    description: 'description of the Host',
  })
  readonly description?: string;

  @IsString({ message: 'Invalid opening_time' })
  @ApiProperty({
    example: '10:30:00',
    description: 'opening time',
  })
  readonly opening_time: string;

  @IsString({ message: 'Invalid closing_time' })
  @ApiProperty({
    example: '20:30:00',
    description: 'closing time',
  })
  readonly closing_time: string;
}
