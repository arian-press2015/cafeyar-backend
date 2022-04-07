import { ApiProperty } from '@nestjs/swagger';

export class FilterPurchaseDto {
  @ApiProperty({
    example: 123,
    description: 'user_id of the Purchase',
  })
  readonly user_id: number;
}
