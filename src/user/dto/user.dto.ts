import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({
    example: '+989012883045',
    description: 'Phone number of the User',
  })
  readonly phone: string;

  @ApiProperty({ example: 'AP2015', description: 'Name of the User' })
  readonly name?: string;

  @ApiProperty({ example: 'AP2015', description: 'Last name of the User' })
  readonly last?: string;

  @ApiProperty({ example: 25, description: 'Age of the User' })
  readonly age?: number;

  @ApiProperty({
    enum: ['male', 'female', 'other'],
    description: 'Gender of the User',
  })
  readonly gender?: string;

  @ApiProperty({ example: 2500000, description: 'credit of the User (IRR)' })
  readonly credit: bigint;

  @ApiProperty({
    example: 'f43uc31u0o4f4j13c',
    description: 'introduction_id of the User',
  })
  readonly introduction_id: string;

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

  @ApiProperty({
    enum: ['male', 'female', 'other'],
    description: 'Gender of the User',
  })
  readonly gender?: string;

  @ApiProperty({
    example: 'f43uc31u0o4f4j13c',
    description: 'introduction_id of the User',
  })
  readonly introduction_id: string;
}

export class UserDisplayRO {
  readonly user: UserDisplay;
}
