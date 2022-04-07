import { ApiProperty } from '@nestjs/swagger';
import { Feature } from 'src/feature/dto';

export class PurchaseLevel {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

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
  readonly features: Feature[];
}

export class PurchaseLevelRO {
  purchaseLevel: PurchaseLevel;
}
