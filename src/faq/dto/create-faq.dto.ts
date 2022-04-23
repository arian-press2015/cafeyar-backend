import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFaqDto {
  @IsString({ message: 'Question must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Question of the Faq' })
  readonly question: string;

  @IsString({ message: 'Answer must be a string' })
  @ApiProperty({ example: 'APCafe', description: 'Answer of the Faq' })
  readonly answer: string;
}
