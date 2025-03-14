import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async register(
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        return this.usersService.createUser(username, email, password);
    }

    @Get(':username')
    async getUser(@Param('username') username: string) {
        return this.usersService.findUserByUsername(username);
    }
}
