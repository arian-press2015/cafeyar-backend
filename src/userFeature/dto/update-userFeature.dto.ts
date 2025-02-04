import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class UpdateUserFeatureDto {
  @IsOptional()
  @IsString({ message: 'Title must be a string' })
  @ApiProperty({ example: 'show sth', description: 'Title of the UserFeature' })
  readonly title?: string;

  @IsOptional()
  @IsString({ message: 'Destination must be a string' })
  @ApiProperty({
    example: 'show something',
    description: 'Description of the UserFeature',
  })
  readonly description?: string;

  @IsOptional()
  @IsBoolean({ message: 'Invalid accepted' })
  @ApiProperty({
    example: '03146258582',
    description: 'Accept status the UserFeature',
  })
  readonly accepted?: boolean;

  @IsOptional()
  @IsBoolean({ message: 'Invalid paid' })
  @ApiProperty({
    example: '03146258582',
    description: 'Payment status the UserFeature',
  })
  readonly paid?: boolean;
}
