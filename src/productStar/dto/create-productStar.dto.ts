import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, Max, Min } from 'class-validator';

export class CreateProductStarDto {
  @IsInt({ message: 'Invalid product_id' })
  @IsPositive({ message: 'Invalid product_id' })
  @ApiProperty({
    example: 123,
    description: 'product_id of the ProductStar',
  })
  readonly product_id: number;

  @IsInt({ message: 'User_id must be a positive number' })
  @IsPositive({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the ProductStar',
  })
  readonly user_id: number;

  @IsInt({ message: 'Invalid star' })
  @Min(1, { message: 'Invalid star' })
  @Max(1, { message: 'Invalid star' })
  @ApiProperty({
    example: 5,
    description: 'product star',
  })
  readonly star: number;
}
