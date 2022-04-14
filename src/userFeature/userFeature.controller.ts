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
import { UserFeatureService } from './userFeature.service';
import {
  UserFeature,
  UserFeatureRO,
  CreateUserFeatureDto,
  UpdateUserFeatureDto,
  FilterUserFeatureDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('user-feature')
@Controller('user-feature')
export class UserFeatureController {
  constructor(private readonly userFeatureService: UserFeatureService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new UserFeature' })
  @ApiBody({
    description: 'CreateUserFeatureDto Schema',
    type: CreateUserFeatureDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new UserFeature',
    type: UserFeatureRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid user_id|Invalid title|Invalid description',
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
    @Body() createUserFeatureDto: CreateUserFeatureDto,
  ): Promise<UserFeatureRO> {
    return this.userFeatureService.create(userID, createUserFeatureDto);
  }

  @Get()
  @ApiBody({
    description: 'UserFeature query fields',
    type: FilterUserFeatureDto,
  })
  @ApiOperation({ summary: 'Get all of the UserFeatures' })
  @ApiResponse({
    status: 200,
    description: 'Returns all of the Categories',
    type: [UserFeature],
  })
  @ApiResponse({
    status: 404,
    description: 'No UserFeature found',
  })
  find(
    @Body() filterUserFeatureDto: FilterUserFeatureDto,
  ): Promise<UserFeature[]> {
    return this.userFeatureService.find(filterUserFeatureDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the UserFeature data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: UserFeatureRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No UserFeature found',
  })
  findOne(@Param('id') catID: number): Promise<UserFeatureRO> {
    return this.userFeatureService.findOne(catID);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current UserFeature' })
  @ApiBody({
    description: 'UpdateUserFeatureDto Schema',
    type: UpdateUserFeatureDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current UserFeature',
    type: UserFeatureRO,
  })
  @ApiResponse({
    status: 400,
    description:
      'Invalid title|Invalid description|Invalid accepted|Invalid paid',
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No UserFeature found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') userFeatureID: number,
    @Body() UpdateUserFeatureDto: UpdateUserFeatureDto,
  ): Promise<UserFeatureRO> {
    return this.userFeatureService.update(
      userID,
      userFeatureID,
      UpdateUserFeatureDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current UserFeature' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current UserFeature',
    type: UserFeatureRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No UserFeature found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') userFeatureID: number,
  ): Promise<UserFeatureRO> {
    return this.userFeatureService.delete(userID, userFeatureID);
  }
}
