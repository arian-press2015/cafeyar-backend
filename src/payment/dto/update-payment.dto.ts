import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdatePaymentDto {
  @IsOptional()
  @IsBoolean({ message: 'Invalid success' })
  @ApiProperty({
    example: true,
    description: 'Success of the Payment',
  })
  readonly success?: boolean;
}
