import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFaqDto {
  @IsString({ message: 'Invalid question' })
  @ApiProperty({ example: 'APCafe', description: 'Question of the Faq' })
  readonly question: string;

  @IsString({ message: 'Invalid answer' })
  @ApiProperty({ example: 'APCafe', description: 'Answer of the Faq' })
  readonly answer: string;
}
