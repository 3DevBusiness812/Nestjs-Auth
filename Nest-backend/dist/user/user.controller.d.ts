import { UserService } from './user.service';
import { CreateUserDto, LoginUserDto } from './user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    signup(createUserDto: CreateUserDto): Promise<import("./user.entitiy").User>;
    login(loginUserDto: LoginUserDto): Promise<import("./user.entitiy").User>;
}
