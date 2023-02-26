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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const roles_enum_1 = require("../constants/roles/roles.enum");
let User = class User {
};
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: "Primary identifier" }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "John", description: "User first name" }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Washington", description: "User last name" }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false,
    }),
    __metadata("design:type", String)
], User.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "user@mail.ru", description: "Email address" }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false,
        unique: true,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "super-secured-password", description: "Password" }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "@user-b1", description: "Unique username" }),
    (0, typeorm_1.Column)({
        type: "varchar",
        nullable: false,
        unique: true
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: roles_enum_1.RolesEnum.STUDENT, description: "User role" }),
    (0, typeorm_1.Column)({
        type: "enum",
        enum: roles_enum_1.RolesEnum,
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "role_type", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "numeric",
        nullable: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "user_role_id", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ name: "users" })
], User);
exports.User = User;
//# sourceMappingURL=user.entity.js.map