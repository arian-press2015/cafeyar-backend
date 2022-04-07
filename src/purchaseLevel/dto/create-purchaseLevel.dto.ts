import { ApiProperty } from '@nestjs/swagger';

export class CreatePurchaseLevelDto {
  @ApiProperty({ example: 'basic', description: 'title of the PurchaseLevel' })
  readonly title: string;

  @ApiProperty({
    example: '03146258582',
    description: 'title of the PurchaseLevel',
  })
  readonly price: number;
}
