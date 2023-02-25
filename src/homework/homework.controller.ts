import { Controller, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { RolesGuard } from "../auth/roles-guard";


@ApiTags("Homework")
@Controller('homework')
@UseGuards(RolesGuard)
export class HomeworkController {}
