import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreatePurchaseLevelDto {
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'basic', description: 'title of the PurchaseLevel' })
  readonly title: string;

  @IsInt({ message: 'Price must be a positive number' })
  @ApiProperty({
    example: '03146258582',
    description: 'title of the PurchaseLevel',
  })
  readonly price: number;

  @IsInt({ each: true, message: 'Features must be a positive number' })
  @ApiProperty({
    example: [1, 2],
    description: 'array of features related to this PurchaseLevel',
  })
  readonly features: number[];
}
