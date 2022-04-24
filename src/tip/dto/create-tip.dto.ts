import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class CreateTipDto {
  @IsInt({ message: 'Order_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'order_id of the Tip',
  })
  readonly order_id: number;

  @IsInt({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Tip',
  })
  readonly user_id: number;

  @IsInt({ message: 'Tip amount must be a positive number' })
  @IsPositive({ message: 'Tip amount must be a positive number' })
  @ApiProperty({
    example: 100000,
    description: 'Tip amount',
  })
  readonly amount: number;

  @IsInt({ message: 'Tip count must be a positive number' })
  @IsPositive({ message: 'Tip count must be a positive number' })
  @ApiProperty({
    example: 5,
    description: 'tip count',
  })
  readonly count: number;

  @IsInt({ message: 'Personnel must be a positive number' })
  @ApiProperty({
    example: [1, 2],
    description: 'tip targets',
  })
  readonly personnel: number[];
}
