import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class UpdateProductStarDto {
  @IsOptional()
  @IsInt({ message: 'Invalid star' })
  @Min(1, { message: 'Invalid star' })
  @Max(1, { message: 'Invalid star' })
  @ApiProperty({
    example: 5,
    description: 'product star',
  })
  readonly star?: number;
}
