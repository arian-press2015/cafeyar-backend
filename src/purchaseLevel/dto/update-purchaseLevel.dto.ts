import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdatePurchaseLevelDto {
  @IsOptional()
  @IsString({ message: 'Invalid title' })
  @ApiProperty({ example: 'basic', description: 'title of the PurchaseLevel' })
  readonly title?: string;

  @IsOptional()
  @IsInt({ message: 'Invalid price' })
  @ApiProperty({
    example: '03146258582',
    description: 'title of the PurchaseLevel',
  })
  readonly price?: number;

  @IsOptional()
  @IsInt({ each: true, message: 'Invalid features' })
  @ApiProperty({
    example: [1, 2],
    description: 'array of features related to this PurchaseLevel',
  })
  readonly features?: number[];
}
