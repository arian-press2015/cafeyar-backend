import { ApiProperty } from '@nestjs/swagger';

export class Payment {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 20000000,
    description: 'Price of the Payment',
  })
  readonly price: number;

  @ApiProperty({
    example: true,
    description: 'Success of the Payment',
  })
  readonly success: boolean;
}

export class PaymentRO {
  payment: Payment;
}
