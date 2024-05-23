import { Module } from "@nestjs/common";
import { NotAnEntityService } from "./notanentity.service";
import { NotAnEntityController } from "./notanentity.controller";
import { NotAnEntityResolver } from "./notanentity.resolver";

@Module({
  controllers: [NotAnEntityController],
  providers: [NotAnEntityService, NotAnEntityResolver],
  exports: [NotAnEntityService],
})
export class NotAnEntityModule {}
