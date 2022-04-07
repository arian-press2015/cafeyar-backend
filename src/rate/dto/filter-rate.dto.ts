import { ApiProperty } from '@nestjs/swagger';

export class FilterRateDto {
  @ApiProperty({
    example: 123,
    description: 'host_id of the Rate',
  })
  readonly host_id: number;
}
