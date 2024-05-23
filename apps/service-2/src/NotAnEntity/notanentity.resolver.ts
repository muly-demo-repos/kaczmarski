import * as graphql from "@nestjs/graphql";
import { NotAnEntityService } from "./notanentity.service";

export class NotAnEntityResolver {
  constructor(protected readonly service: NotAnEntityService) {}
}
