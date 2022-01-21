import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: '09012883045',
    description: 'Phone number of the User',
  })
  readonly phone: string;

  @ApiProperty({ example: 'AP2015', description: 'Name of the User' })
  readonly name?: string;

  @ApiProperty({ example: 'AP2015', description: 'Last name of the User' })
  readonly last?: string;

  @ApiProperty({ example: 25, description: 'Age of the User' })
  readonly age?: number;

  @ApiProperty({ enum: ['Male', 'Female'], description: 'Gender of the User' })
  readonly gender?: string;

  @ApiProperty({ example: 65, description: 'Weight of the User (Kg)' })
  readonly weight?: number;

  @ApiProperty({ example: 183, description: 'Height of the User (cm)' })
  readonly height?: number;

  @ApiProperty({
    example: '49e09tuv09qtvuq93arav',
    description: 'User Auth token',
  })
  readonly token?: string;
}

export class UserRO {
  readonly user: User;
}

export class UserDisplay {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({ example: 'AP2015', description: 'Name of the User' })
  readonly name?: string;

  @ApiProperty({ example: 'AP2015', description: 'Last name of the User' })
  readonly last?: string;

  @ApiProperty({ example: 25, description: 'Age of the User' })
  readonly age?: number;

  @ApiProperty({ enum: ['Male', 'Female'], description: 'Gender of the User' })
  readonly gender?: string;

  @ApiProperty({ example: 65, description: 'Weight of the User (Kg)' })
  readonly weight?: number;

  @ApiProperty({ example: 183, description: 'Height of the User (cm)' })
  readonly height?: number;
}

export class UserDisplayRO {
  readonly user: UserDisplay;
}
