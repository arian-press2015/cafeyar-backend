import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFaqDto {
  @IsOptional()
  @IsString({ message: 'Invalid question' })
  @ApiProperty({ example: 'APCafe', description: 'Question of the Faq' })
  readonly question?: string;

  @IsOptional()
  @IsString({ message: 'Invalid answer' })
  @ApiProperty({ example: 'APCafe', description: 'Answer of the Faq' })
  readonly answer?: string;
}
