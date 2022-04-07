import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
  @ApiProperty({
    example: 2000000,
    description: 'total_price of the Order',
  })
  readonly total_price: number;

  @ApiProperty({
    example: 100000,
    description: 'total_discount of the Order',
  })
  readonly total_discount: number;

  @ApiProperty({
    example: '2020/02/02 10:20:30',
    description: 'Time of the Order',
  })
  readonly time: string;

  @ApiProperty({ example: 'nothing', description: 'description of the Order' })
  readonly description: string;
}
