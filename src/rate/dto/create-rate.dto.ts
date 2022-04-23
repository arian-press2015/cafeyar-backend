import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, Max, Min } from 'class-validator';

export class CreateRateDto {
  @IsInt({ message: 'User_id must be a positive number' })
  @IsPositive({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Rate',
  })
  readonly user_id: number;

  @IsInt({ message: 'Invalid host_id' })
  @IsPositive({ message: 'Invalid host_id' })
  @ApiProperty({
    example: 123,
    description: 'host_id of the Rate',
  })
  readonly host_id: number;

  @IsInt({ message: 'Invalid host_point' })
  @Min(1, { message: 'Invalid host_point' })
  @Max(5, { message: 'Invalid host_point' })
  @ApiProperty({
    example: 5,
    description: 'the host Rate',
  })
  readonly host_point: number;

  @IsInt({ message: 'Invalid personnel_point' })
  @Min(1, { message: 'Invalid personnel_point' })
  @Max(5, { message: 'Invalid personnel_point' })
  @ApiProperty({
    example: 5,
    description: 'the personnel Rate',
  })
  readonly personnel_point: number;

  @IsInt({ message: 'Invalid quality_point' })
  @Min(1, { message: 'Invalid quality_point' })
  @Max(5, { message: 'Invalid quality_point' })
  @ApiProperty({
    example: 5,
    description: 'the quality Rate',
  })
  readonly quality_point: number;

  @IsString({ message: 'Invalid description' })
  @ApiProperty({
    example: 'it was good',
    description: 'this is optional description',
  })
  readonly description: string;
}
