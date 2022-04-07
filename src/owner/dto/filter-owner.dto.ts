import { ApiProperty } from '@nestjs/swagger';

export class FilterOwnerDto {
  @ApiProperty({
    example: 2,
    description: 'owner_role_id of the Owner',
  })
  readonly owner_role_id: number;
}
