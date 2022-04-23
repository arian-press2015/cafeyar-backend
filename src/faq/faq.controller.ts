import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FaqService } from './faq.service';
import {
  Faq,
  FaqRO,
  CreateFaqDto,
  UpdateFaqDto,
  FilterFaqDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('faq')
@Controller('faq')
export class FaqController {
  constructor(private readonly faqService: FaqService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Faq' })
  @ApiBody({
    description: 'CreateFaqDto Schema',
    type: CreateFaqDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Faq',
    type: FaqRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Faq already exists|Question must be a string|Answer must be a string',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No User found',
  })
  create(
    @User('id') userID: number,
    @Body() createFaqDto: CreateFaqDto,
  ): Promise<FaqRO> {
    return this.faqService.create(userID, createFaqDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Faq query fields',
    type: FilterFaqDto,
  })
  @ApiOperation({ summary: 'Get all of the Faqs' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Faq],
  })
  @ApiResponse({
    status: 400,
    description:
      'Page must be a positive number|Limit must be a positive number',
  })
  @ApiResponse({
    status: 404,
    description: 'No Faq found',
  })
  find(@Body() filterFaqDto: FilterFaqDto): Promise<Faq[]> {
    return this.faqService.find(filterFaqDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Faq data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: FaqRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Faq found',
  })
  findOne(@Param('id') catID: number): Promise<FaqRO> {
    return this.faqService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Faq' })
  @ApiBody({
    description: 'UpdateFaqDto Schema',
    type: UpdateFaqDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Faq',
    type: FaqRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Question must be a string|Answer must be a string',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Faq found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') faqID: number,
    @Body() UpdateFaqDto: UpdateFaqDto,
  ): Promise<FaqRO> {
    return this.faqService.update(userID, faqID, UpdateFaqDto);
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Faq' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Faq',
    type: FaqRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Faq found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') faqID: number,
  ): Promise<FaqRO> {
    return this.faqService.delete(userID, faqID);
  }
}
