import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePurchaseLifetimeDto {
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({
    example: 'monthly',
    description: 'title of the PurchaseLifetime',
  })
  readonly title: string;

  @IsString({ message: 'Destination must be a string' })
  @ApiProperty({
    example: 'this is monthly purchase',
    description: 'description of the PurchaseLifetime',
  })
  readonly description: string;

  @IsNumber(
    { allowNaN: false },
    { message: 'Multiplier must be a positive number' },
  )
  @ApiProperty({
    example: 0.1,
    description: 'multiplier of the PurchaseLifetime',
  })
  readonly multiplier: number;
}
