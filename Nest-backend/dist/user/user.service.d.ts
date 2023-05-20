import { CreateUserDto, LoginUserDto } from './user.dto';
import { User } from './user.entitiy';
import { Repository } from 'typeorm';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    signup(createUserDto: CreateUserDto): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<User>;
}
