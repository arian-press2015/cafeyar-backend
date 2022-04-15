import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Max, Min } from 'class-validator';

export class UpdateProductStarDto {
  @IsInt({ message: 'Invalid star' })
  @Min(1, { message: 'Invalid star' })
  @Max(1, { message: 'Invalid star' })
  @ApiProperty({
    example: 5,
    description: 'product star',
  })
  readonly star: number;
}
