import { ApiProperty } from '@nestjs/swagger';

export class UpdateFaqDto {
  @ApiProperty({ example: 'APCafe', description: 'Question of the Faq' })
  readonly question: string;

  @ApiProperty({ example: 'APCafe', description: 'Answer of the Faq' })
  readonly answer: string;
}
