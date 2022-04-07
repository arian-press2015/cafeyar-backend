import { ApiProperty } from '@nestjs/swagger';

export class UpdatePersonnelDto {
  @ApiProperty({
    example: 123,
    description: 'user_id of the Personnel',
  })
  readonly user_id: number;

  @ApiProperty({
    example: 123,
    description: 'host_id of the Personnel',
  })
  readonly host_id: number;

  @ApiProperty({
    example: 123,
    description: 'role_id of the Personnel',
  })
  readonly role_id: number;
}
