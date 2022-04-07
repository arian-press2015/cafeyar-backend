import { ApiProperty } from '@nestjs/swagger';

export class UpdateVersionDto {
  @ApiProperty({
    example: 123,
    description: 'number of the Version',
  })
  readonly version_number: number;
}
