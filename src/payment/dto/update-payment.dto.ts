import { ApiProperty } from '@nestjs/swagger';

export class UpdatePaymentDto {
  @ApiProperty({
    example: true,
    description: 'Success of the Payment',
  })
  readonly success: boolean;
}
