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
import { PersonnelService } from './personnel.service';
import {
  Personnel,
  PersonnelRO,
  CreatePersonnelDto,
  UpdatePersonnelDto,
  FilterPersonnelDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('personnel')
@Controller('personnel')
export class PersonnelController {
  constructor(private readonly personnelService: PersonnelService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new Personnel' })
  @ApiBody({
    description: 'CreatePersonnelDto Schema',
    type: CreatePersonnelDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new Personnel',
    type: PersonnelRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Personnel already exists|Invalid user_id|Invalid host_id|Invalid role_id',
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
    @Body() createPersonnelDto: CreatePersonnelDto,
  ): Promise<PersonnelRO> {
    return this.personnelService.create(userID, createPersonnelDto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  @ApiBody({
    description: 'Personnel query fields',
    type: FilterPersonnelDto,
  })
  @ApiOperation({ summary: 'Get all of the Personnels' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [Personnel],
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid host_id|Invalid role_id|Invalid page|Invalid limit',
  })
  @ApiResponse({
    status: 404,
    description: 'No Personnel found',
  })
  find(@Body() filterPersonnelDto: FilterPersonnelDto): Promise<Personnel[]> {
    return this.personnelService.find(filterPersonnelDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the Personnel data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: PersonnelRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No Personnel found',
  })
  findOne(@Param('id') catID: number): Promise<PersonnelRO> {
    return this.personnelService.findOne(catID);
  }

  @UsePipes(new ValidationPipe())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current Personnel' })
  @ApiBody({
    description: 'UpdatePersonnelDto Schema',
    type: UpdatePersonnelDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current Personnel',
    type: PersonnelRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid user_id|Invalid host_id|Invalid role_id',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Personnel found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') personnelID: number,
    @Body() UpdatePersonnelDto: UpdatePersonnelDto,
  ): Promise<PersonnelRO> {
    return this.personnelService.update(
      userID,
      personnelID,
      UpdatePersonnelDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current Personnel' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current Personnel',
    type: PersonnelRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No Personnel found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') personnelID: number,
  ): Promise<PersonnelRO> {
    return this.personnelService.delete(userID, personnelID);
  }
}
