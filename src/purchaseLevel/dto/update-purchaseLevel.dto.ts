import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdatePurchaseLevelDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'basic', description: 'title of the PurchaseLevel' })
  readonly title?: string;

  @IsOptional()
  @IsInt({ message: 'Price must be a positive number' })
  @ApiProperty({
    example: '03146258582',
    description: 'title of the PurchaseLevel',
  })
  readonly price?: number;

  @IsOptional()
  @IsInt({ each: true, message: 'Features must be a positive number' })
  @ApiProperty({
    example: [1, 2],
    description: 'array of features related to this PurchaseLevel',
  })
  readonly features?: number[];
}
