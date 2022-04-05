import { ApiProperty } from '@nestjs/swagger';

export class UpdateProductStarDto {
  @ApiProperty({
    example: 5,
    description: 'product star',
  })
  readonly star: number;
}
