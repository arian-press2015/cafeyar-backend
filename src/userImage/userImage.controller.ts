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
import { UserImageService } from './userImage.service';
import {
  UserImage,
  UserImageRO,
  CreateUserImageDto,
  UpdateUserImageDto,
} from './dto/index';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { User } from 'src/user/user.decorator';

@ApiTags('user-image')
@Controller('user-image')
export class UserImageController {
  constructor(private readonly userImageService: UserImageService) {}

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiOperation({ summary: 'Create new UserImage' })
  @ApiBody({
    description: 'CreateUserImageDto Schema',
    type: CreateUserImageDto,
  })
  @ApiResponse({
    status: 201,
    description: 'Creates a new UserImage',
    type: UserImageRO,
  })
  @ApiResponse({
    status: 400,
    description: 'UserImage already exists',
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
    @Body() createUserImageDto: CreateUserImageDto,
  ): Promise<UserImageRO> {
    return this.userImageService.create(userID, createUserImageDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get the UserImage data' })
  @ApiResponse({
    status: 200,
    description: 'Returns the image associated with the type field',
    type: UserImageRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No UserImage found',
  })
  findOne(@Param('id') catID: number): Promise<UserImageRO> {
    return this.userImageService.findOne(catID);
  }

  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({ summary: 'Update current UserImage' })
  @ApiBody({
    description: 'UpdateUserImageDto Schema',
    type: UpdateUserImageDto,
  })
  @ApiResponse({
    status: 200,
    description: 'Updates current UserImage',
    type: UserImageRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No UserImage found|No User found',
  })
  update(
    @User('id') userID: number,
    @Param('id') userImageID: number,
    @Body() UpdateUserImageDto: UpdateUserImageDto,
  ): Promise<UserImageRO> {
    return this.userImageService.update(
      userID,
      userImageID,
      UpdateUserImageDto,
    );
  }

  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({ summary: 'Delete current UserImage' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current UserImage',
    type: UserImageRO,
  })
  @ApiResponse({
    status: 403,
    description: "You don't have permission to do that",
  })
  @ApiResponse({
    status: 404,
    description: 'No UserImage found|No User found',
  })
  delete(
    @User('id') userID: number,
    @Param('id') userImageID: number,
  ): Promise<UserImageRO> {
    return this.userImageService.delete(userID, userImageID);
  }
}
