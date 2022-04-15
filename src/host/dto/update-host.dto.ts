import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateHostDto {
  @IsOptional()
  @IsString({ message: 'Invalid name' })
  @ApiProperty({ example: 'APCafe', description: 'Name of the Host' })
  readonly name?: string;

  @IsOptional()
  @IsString({ message: 'Invalid phone' })
  @ApiProperty({
    example: '03146258582',
    description: 'Phone number of the Host',
  })
  readonly phone?: string;

  @IsOptional()
  @IsString({ message: 'Invalid address' })
  @ApiProperty({ example: 'somewhere', description: 'Address of the Host' })
  readonly address?: string;

  @IsOptional()
  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'blah-blah-blah',
    description: 'description of the Host',
  })
  readonly description?: string;

  @IsOptional()
  @IsString({ message: 'Invalid opening_time' })
  @ApiProperty({
    example: '10:30:00',
    description: 'opening time',
  })
  readonly opening_time?: string;

  @IsOptional()
  @IsString({ message: 'Invalid closing_time' })
  @ApiProperty({
    example: '20:30:00',
    description: 'closing time',
  })
  readonly closing_time?: string;
}
