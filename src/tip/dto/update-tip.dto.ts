import { ApiProperty } from '@nestjs/swagger';

export class UpdateTipDto {
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
