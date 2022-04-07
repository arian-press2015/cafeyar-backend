import { ApiProperty } from '@nestjs/swagger';

export class CreateRateDto {
  @ApiProperty({
    example: 123,
    description: 'user_id of the Rate',
  })
  readonly user_id: number;

  @ApiProperty({
    example: 123,
    description: 'host_id of the Rate',
  })
  readonly host_id: number;

  @ApiProperty({
    example: 5,
    description: 'the host Rate',
  })
  readonly host_point: number;

  @ApiProperty({
    example: 5,
    description: 'the personnel Rate',
  })
  readonly personnel_point: number;

  @ApiProperty({
    example: 5,
    description: 'the quality Rate',
  })
  readonly quality_point: number;

  @ApiProperty({
    example: 'it was good',
    description: 'this is optional description',
  })
  readonly description: string;
}
