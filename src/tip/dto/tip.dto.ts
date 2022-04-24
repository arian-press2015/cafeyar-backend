import { ApiProperty } from '@nestjs/swagger';
import { Personnel } from 'src/personnel/dto';

export class Tip {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'order_id of the Tip',
  })
  readonly order_id: number;

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

  @ApiProperty({
    example: [
      {
        id: 1,
        user_id: 1,
        host_id: 1,
        role_id: 1,
      },
    ],
    description: 'tip targets',
  })
  readonly personnels: Personnel[];
}

export class TipRO {
  tip: Tip;
}
