import { ApiProperty } from '@nestjs/swagger';

export class CreateOwnerDto {
  @ApiProperty({
    example: 123,
    description: 'user_id of the Owner',
  })
  readonly user_id: number;

  @ApiProperty({ example: 'ap2015', description: 'Username of the Owner' })
  readonly username: string;

  @ApiProperty({ example: 'ap2015', description: 'Password of the Owner' })
  readonly password: string;

  @ApiProperty({
    example: 2,
    description: 'owner_role_id of the Owner',
  })
  readonly owner_role_id: number;

  @ApiProperty({
    example: '2022/02/02 20:20:20',
    description: 'creation_date of the Owner',
  })
  readonly creation_date: string;
}
