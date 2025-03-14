import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    createUser(username: string, email: string, password: string): Promise<User>;
    findUserByUsername(username: string): Promise<User | null>;
}
