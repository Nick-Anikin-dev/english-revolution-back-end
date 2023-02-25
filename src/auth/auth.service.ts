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
        const { password, ...user } = await this.validateUser(signInDto);
        const { token } = await this.generateToken(user);
        return {
            user, token
        };
    }

    private async validateUser(signInDto: SignInDto) {
        const user = await this.userService.getUserByEmail(signInDto.email);
        if (!user) {
            throw new NotFoundException(`User with email: ${signInDto.email} does not exist`);
        }

        const isPasswordEquals = await bcrypt.compare(signInDto.password, user.password);

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
        const { token } = await this.generateToken(user);
        return {
            user,
            token
        };
    }

    private async generateToken(user: Partial<User>) {
        const payload = { id: user.id, email: user.email, role: user.role_type };
        return {
            token: this.jwtService.sign(payload)
        };
    }
}
