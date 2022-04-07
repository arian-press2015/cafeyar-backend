import { ApiProperty } from '@nestjs/swagger';

export class Tip {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'invoice_id of the Tip',
  })
  readonly invoice_id: number;

  @ApiProperty({
    example: 123,
    description: 'user_id of the Tip',
  })
  readonly user_id: number;

  @ApiProperty({
    example: 100000,
    description: 'Tip amount',
  })
  readonly amount: number;

  @ApiProperty({
    example: 5,
    description: 'tip count',
  })
  readonly count: number;
}

export class TipRO {
  tip: Tip;
}
