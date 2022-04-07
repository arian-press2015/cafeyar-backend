import { ApiProperty } from '@nestjs/swagger';

export class FilterUserImageDto {
  @ApiProperty({
    example: 123,
    description: 'host_id of the UserImage',
  })
  readonly host_id: number;
}
