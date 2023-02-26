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
exports.GetScheduleQuery = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class GetScheduleQuery {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        name: "date_from",
        example: "2023-02-23T13:08:38.995Z",
        description: "Date from value"
    }),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", String)
], GetScheduleQuery.prototype, "date_from", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({
        name: "date_from",
        example: "2023-02-23T13:08:38.995Z",
        description: "Date from value"
    }),
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    __metadata("design:type", String)
], GetScheduleQuery.prototype, "date_to", void 0);
exports.GetScheduleQuery = GetScheduleQuery;
//# sourceMappingURL=get-schedule.query.dto.js.map