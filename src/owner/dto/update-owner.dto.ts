import { ApiProperty } from '@nestjs/swagger';

export class UpdateOwnerDto {
  @ApiProperty({ example: 'ap2015', description: 'Username of the Owner' })
  readonly username: string;

  @ApiProperty({ example: 'ap2015', description: 'Password of the Owner' })
  readonly password: string;

  @ApiProperty({
    example: 2,
    description: 'owner_role_id of the Owner',
  })
  readonly owner_role_id: number;
}
