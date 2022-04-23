import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class UpdateRateDto {
  @IsOptional()
  @IsInt({ message: 'Invalid host_point' })
  @Min(1, { message: 'Invalid host_point' })
  @Max(5, { message: 'Invalid host_point' })
  @ApiProperty({
    example: 5,
    description: 'the host Rate',
  })
  readonly host_point?: number;

  @IsOptional()
  @IsInt({ message: 'Invalid personnel_point' })
  @Min(1, { message: 'Invalid personnel_point' })
  @Max(5, { message: 'Invalid personnel_point' })
  @ApiProperty({
    example: 5,
    description: 'the personnel Rate',
  })
  readonly personnel_point?: number;

  @IsOptional()
  @IsInt({ message: 'Invalid quality_point' })
  @Min(1, { message: 'Invalid quality_point' })
  @Max(5, { message: 'Invalid quality_point' })
  @ApiProperty({
    example: 5,
    description: 'the quality Rate',
  })
  readonly quality_point?: number;

  @IsOptional()
  @IsString({ message: 'Destination must be a string' })
  @ApiProperty({
    example: 'it was good',
    description: 'this is optional description',
  })
  readonly description?: string;
}
