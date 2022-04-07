import { ApiProperty } from '@nestjs/swagger';

export class Personnel {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

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

export class PersonnelRO {
  personnel: Personnel;
}
