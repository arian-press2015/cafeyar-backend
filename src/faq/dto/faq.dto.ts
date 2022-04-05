import { ApiProperty } from '@nestjs/swagger';

export class Faq {
  @ApiProperty({ example: 12345, description: 'ID of the entity in database' })
  readonly id: number;

  @ApiProperty({ example: 'APCafe', description: 'Question of the Faq' })
  readonly question: string;

  @ApiProperty({ example: 'APCafe', description: 'Answer of the Faq' })
  readonly answer: string;
}

export class FaqRO {
  faq: Faq;
}
