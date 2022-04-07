import { ApiProperty } from '@nestjs/swagger';

export class UpdatePurchaseLevelDto {
  @ApiProperty({ example: 'basic', description: 'title of the PurchaseLevel' })
  readonly title: string;

  @ApiProperty({
    example: '03146258582',
    description: 'title of the PurchaseLevel',
  })
  readonly price: number;

  @ApiProperty({
    example: [1, 2],
    description: 'array of features related to this PurchaseLevel',
  })
  readonly features: number[];
}
