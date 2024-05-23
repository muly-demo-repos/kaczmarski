import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotAnEntityService } from "./notanentity.service";

@swagger.ApiTags("notAnEntities")
@common.Controller("notAnEntities")
export class NotAnEntityController {
  constructor(protected readonly service: NotAnEntityService) {}
}
