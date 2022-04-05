import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductDto {
  @ApiProperty({ example: 'APCafe', description: 'Name of the Product' })
  readonly name: string;

  @ApiProperty({
    example: '03146258582',
    description: 'price of the Product',
  })
  readonly price: number;

  @ApiProperty({
    example: true,
    description: 'product enabled',
  })
  readonly enabled: boolean;

  @ApiProperty({
    example: false,
    description: 'product deleted',
  })
  readonly deleted: boolean;
}
