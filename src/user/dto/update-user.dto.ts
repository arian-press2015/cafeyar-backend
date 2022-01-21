import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
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
