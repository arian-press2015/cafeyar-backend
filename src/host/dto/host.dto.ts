import { ApiProperty } from '@nestjs/swagger';

export class Host {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: 123,
    description: 'Owner_id of the Host',
  })
  readonly owner: number;

  @ApiProperty({ example: 'APCafe', description: 'Name of the Host' })
  readonly name: string;

  @ApiProperty({
    example: '03146258582',
    description: 'Phone number of the Host',
  })
  readonly phone: string;

  @ApiProperty({ example: 'somewhere', description: 'Address of the Host' })
  readonly address?: string;

  @ApiProperty({
    example: 'blah-blah-blah',
    description: 'description of the Host',
  })
  readonly description?: string;

  @ApiProperty({
    example: '10:30:00',
    description: 'opening time',
  })
  readonly opening_time: string;

  @ApiProperty({
    example: '20:30:00',
    description: 'closing time',
  })
  readonly closing_time: string;
}

export class HostRO {
  readonly host: Host;
}
