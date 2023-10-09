import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { ProposalsService } from "./proposals.service";
import { ProposalsController } from "./proposals.controller";
import { Proposal, ProposalSchema } from "./schemas/proposal.schema";

@Module({
    providers: [ProposalsService],
    controllers: [ProposalsController],
    imports: [MongooseModule.forFeature([{ name: Proposal.name, schema: ProposalSchema }])]
})
export class ProposalsModule {}
