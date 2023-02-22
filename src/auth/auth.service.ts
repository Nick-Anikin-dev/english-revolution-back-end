import { HttpException, HttpStatus, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "../user/dtos/create-user.dto";
import { UsersService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { User } from "../user/user.entity";
import { SignInDto } from "./dto/sign-in.dto";

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService) {
    }

    async signIn(signInDto: SignInDto) {
        const user = await this.validateUser(signInDto);
        const { token } = await this.generateToken(user);
        return {
            user, token
        };
    }

    private async validateUser(userDto: CreateUserDto) {
        const user = await this.userService.getUserByEmail(userDto.email);
        if (!user) {
            throw new NotFoundException(`User with email: ${userDto.email} does not exist`);
        }

        const isPasswordEquals = await bcrypt.compare(userDto.password, user.password);

        if (isPasswordEquals) {
            return user;
        }
        throw new UnauthorizedException({ message: "Incorrect email or password" });
    }

    async signUp(userDto: CreateUserDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new HttpException("User with this is already exist", HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser({ ...userDto, password: hashPassword });
        const token = await this.generateToken(user);
        return {
            user,
            token
        };
    }

    private async generateToken(user: User) {
        const payload = { id: user.id, email: user.email, roles: user.role_type };
        return {
            token: this.jwtService.sign(payload)
        };
    }
}
