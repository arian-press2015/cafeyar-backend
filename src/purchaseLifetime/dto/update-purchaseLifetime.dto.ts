import { ApiProperty } from '@nestjs/swagger';

export class UpdatePurchaseLifetimeDto {
  @ApiProperty({
    example: 'monthly',
    description: 'title of the PurchaseLifetime',
  })
  readonly title: string;

  @ApiProperty({
    example: 'this is monthly purchase',
    description: 'description of the PurchaseLifetime',
  })
  readonly description: string;

  @ApiProperty({
    example: 0.1,
    description: 'multiplier of the PurchaseLifetime',
  })
  readonly multiplier: number;
}
