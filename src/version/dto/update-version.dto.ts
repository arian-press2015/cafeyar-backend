import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class UpdateVersionDto {
  @IsNumber(
    {
      allowNaN: false,
    },
    { message: 'Version must be number' },
  )
  @ApiProperty({
    example: 123,
    description: 'number of the Version',
  })
  readonly version_number: number;
}
