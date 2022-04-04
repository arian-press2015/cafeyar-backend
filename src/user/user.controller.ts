import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Patch,
  UsePipes,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiTags,
  ApiBody,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { User } from './user.decorator';
import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserDto,
  UserDisplayRO,
  UserRO,
  VerifyUserDto,
} from './dto';
import { ValidationPipe } from '../shared/pipes/validation.pipe';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBearerAuth()
  @Get('me')
  @ApiOperation({ summary: 'Get User data' })
  @ApiResponse({
    status: 200,
    description: 'Returns User for provided Auth Token',
    type: UserDisplayRO,
  })
  async findMe(@User('phone') phone: string): Promise<UserDisplayRO> {
    return await this.userService.findByPhone(phone);
  }

  @ApiBearerAuth()
  @Get('')
  @ApiOperation({ summary: 'Get User data' })
  @ApiResponse({
    status: 200,
    description: 'Returns User for provided id',
    type: UserDisplayRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No user found',
  })
  async findOne(@Body('id') id: number): Promise<UserDisplayRO> {
    return await this.userService.findById(id);
  }

  @UsePipes(new ValidationPipe())
  @Post('')
  @ApiOperation({ summary: 'Create new User' })
  @ApiBody({ description: 'CreateUserDto Schema', type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'Creates a new User',
    type: UserDisplayRO,
  })
  @ApiResponse({
    status: 400,
    description: 'phone number already exists',
  })
  async create(@Body() userData: CreateUserDto): Promise<UserDisplayRO> {
    return await this.userService.create(userData);
  }

  @ApiBearerAuth()
  @Patch('')
  @ApiOperation({ summary: 'Update current User' })
  @ApiBody({ description: 'UpdateUserDto Schema', type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'Updates current User',
    type: UserRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No user found',
  })
  async update(
    @User('id') userId: number,
    @Body() userData: UpdateUserDto,
  ): Promise<UserRO> {
    return await this.userService.update(userId, userData);
  }

  @ApiBearerAuth()
  @Delete('')
  @ApiOperation({ summary: 'Delete current User' })
  @ApiResponse({
    status: 200,
    description: 'Deletes current User',
    type: UserDisplayRO,
  })
  @ApiResponse({
    status: 404,
    description: 'No user found',
  })
  async delete(@User('id') userId: number): Promise<UserDisplayRO> {
    return await this.userService.delete(userId);
  }

  @UsePipes(new ValidationPipe())
  @Get('login')
  @ApiOperation({ summary: 'Request login verification' })
  @ApiBody({ description: 'LoginUserDto Schema', type: LoginUserDto })
  @ApiResponse({
    status: 200,
    description: 'Trys to Log in using given data',
    type: Boolean,
  })
  @ApiResponse({
    status: 404,
    description: 'No user found',
  })
  async login(@Body() loginUserDto: LoginUserDto): Promise<boolean> {
    return await this.userService.login(loginUserDto);
  }

  @UsePipes(new ValidationPipe())
  @Post('login')
  @ApiOperation({ summary: 'Verify User' })
  @HttpCode(200)
  @ApiBody({ description: 'VerifyUserDto Schema', type: VerifyUserDto })
  @ApiResponse({
    status: 200,
    description: 'Verifies User before login and returns Auth Token',
    type: UserRO,
  })
  @ApiResponse({
    status: 400,
    description: 'Wrong otp',
  })
  @ApiResponse({
    status: 404,
    description: 'No otp found|No user found',
  })
  async verify(@Body() verifyUserDto: VerifyUserDto): Promise<UserRO> {
    return await this.userService.verify(verifyUserDto);
  }
}
