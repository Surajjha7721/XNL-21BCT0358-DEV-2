import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async createUser(username: string, email: string, password: string): Promise<User> {
        const user = this.usersRepository.create({ username, email, password });
        return this.usersRepository.save(user);
    }

    async findUserByUsername(username: string): Promise<User | null> {
        return this.usersRepository.findOne({ where: { username } });
    }
}
