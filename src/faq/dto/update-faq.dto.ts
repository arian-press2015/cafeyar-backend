import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFaqDto {
  @IsOptional()
  @IsString({ message: 'Question must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Question of the Faq' })
  readonly question?: string;

  @IsOptional()
  @IsString({ message: 'Answer must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Answer of the Faq' })
  readonly answer?: string;
}
