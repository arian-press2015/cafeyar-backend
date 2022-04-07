import { ApiProperty } from '@nestjs/swagger';

export class FilterRoleDto {
  @ApiProperty({
    example: 123,
    description: 'host_id of the Role',
  })
  readonly host_id: number;
}
