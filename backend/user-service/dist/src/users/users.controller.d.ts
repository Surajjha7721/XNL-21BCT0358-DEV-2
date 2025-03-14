import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(username: string, email: string, password: string): Promise<import("./users.entity").User>;
    getUser(username: string): Promise<import("./users.entity").User | null>;
}
