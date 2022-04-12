import { ApiProperty } from '@nestjs/swagger';

export class Version {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'number of the Version',
  })
  readonly version_number: number;

  @ApiProperty({
    example: '2022-02-02 20:30:40',
    description: 'creation date of the Version',
  })
  readonly creation_date: string;
}

export class VersionRO {
  version: Version;
}
