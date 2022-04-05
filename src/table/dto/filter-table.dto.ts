import { ApiProperty } from '@nestjs/swagger';

export class FilterTableDto {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly hostID: number;
}
