import { Controller, UseGuards } from "@nestjs/common";
import { RolesGuard } from "../auth/roles-guard";

@Controller('topic')
@UseGuards(RolesGuard)
export class TopicController{}
