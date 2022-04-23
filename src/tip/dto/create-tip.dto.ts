import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class CreateTipDto {
  @IsInt({ message: 'Invalid Invoice_id' })
  @ApiProperty({
    example: 123,
    description: 'invoice_id of the Tip',
  })
  readonly invoice_id: number;

  @IsInt({ message: 'User_id must be a positive number' })
  @ApiProperty({
    example: 123,
    description: 'user_id of the Tip',
  })
  readonly user_id: number;

  @IsInt({ message: 'Invalid tip amount' })
  @IsPositive({ message: 'Invalid tip amount' })
  @ApiProperty({
    example: 100000,
    description: 'Tip amount',
  })
  readonly amount: number;

  @IsInt({ message: 'Invalid tip count' })
  @IsPositive({ message: 'Invalid tip count' })
  @ApiProperty({
    example: 5,
    description: 'tip count',
  })
  readonly count: number;

  @IsInt({ message: 'Invalid personnel' })
  @ApiProperty({
    example: [1, 2],
    description: 'tip targets',
  })
  readonly personnel: number[];
}
