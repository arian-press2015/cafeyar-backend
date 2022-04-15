import { ApiProperty } from '@nestjs/swagger';

export class CreateProductStarDto {
  @IsInt({ message: 'Invalid user_id' })
  @IsPositive({ message: 'Invalid user_id' })
  @ApiProperty({
    example: 123,
    description: 'product_id of the ProductStar',
  })
  readonly product_id: number;

  @IsInt({ message: 'Invalid user_id' })
  @IsPositive({ message: 'Invalid user_id' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the ProductStar',
  })
  readonly user_id: number;

  @ApiProperty({
    example: 5,
    description: 'product star',
  })
  readonly star: number;
}
