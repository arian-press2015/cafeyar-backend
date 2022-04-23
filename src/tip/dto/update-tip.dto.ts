import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class UpdateTipDto {
  @IsOptional()
  @IsInt({ message: 'Tip amount must be a positive number' })
  @IsPositive({ message: 'Tip amount must be a positive number' })
  @ApiProperty({
    example: 100000,
    description: 'Tip amount',
  })
  readonly amount?: number;

  @IsOptional()
  @IsInt({ message: 'Tip count must be a positive number' })
  @IsPositive({ message: 'Tip count must be a positive number' })
  @ApiProperty({
    example: 5,
    description: 'tip count',
  })
  readonly count?: number;

  @IsOptional()
  @IsInt({ message: 'Personnel must be a positive number' })
  @ApiProperty({
    example: [1, 2],
    description: 'tip targets',
  })
  readonly personnel?: number[];
}
