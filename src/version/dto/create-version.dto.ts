import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber } from 'class-validator';

export class CreateVersionDto {
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

  @IsDateString({}, { message: 'Invalid creation_date' })
  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'creation date of the Version',
  })
  readonly creation_date: string;
}
