"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async auth(req) {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new common_1.UnauthorizedException();
        }
        const [bearer, token] = authorization.split(' ');
        if (bearer !== 'Bearer') {
            throw new common_1.UnauthorizedException();
        }
        let user;
        try {
            user = this.jwtService.verify(token);
        }
        catch (e) {
            throw new common_1.UnauthorizedException();
        }
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        return await this.userService.getUserById(user.id);
    }
    async signIn(signInDto) {
        const _a = await this.validateUser(signInDto), { password } = _a, user = __rest(_a, ["password"]);
        const { token } = await this.generateToken(user);
        return {
            user, token,
        };
    }
    async validateUser(signInDto) {
        const user = await this.userService.getUserByEmail(signInDto.email);
        if (!user) {
            throw new common_1.NotFoundException(`User with email: ${signInDto.email} does not exist`);
        }
        const isPasswordEquals = await bcrypt.compare(signInDto.password, user.password);
        if (isPasswordEquals) {
            return user;
        }
        throw new common_1.UnauthorizedException({ message: 'Incorrect email or password' });
    }
    async signUp(userDto) {
        const candidate = await this.userService.getUserByEmail(userDto.email);
        if (candidate) {
            throw new common_1.HttpException('User with this is already exist', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPassword }));
        const { token } = await this.generateToken(user);
        return {
            user,
            token,
        };
    }
    async generateToken(user) {
        const payload = { id: user.id, email: user.email, role: user.role_type };
        return {
            token: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map