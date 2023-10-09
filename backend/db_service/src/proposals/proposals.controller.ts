import { Controller, Get, Param, Post, Delete, Put, Body, HttpCode, HttpStatus, Header } from "@nestjs/common";

import { ProposalsService } from "./proposals.service";
import { Proposal } from "./schemas/proposal.schema";
import { UpdateProposalDto } from "./dto/update-proposal.dto";
import { CreateProposalDto } from "./dto/create-proposal.dto";

@Controller("proposals")
export class ProposalsController {
    constructor(private readonly proposalService: ProposalsService) {}

    @Get()
    getAllPools(): Promise<Proposal[]> {
        return this.proposalService.getAll();
    }

    @Get(":id")
    getOnePool(@Param("id") id: string): Promise<Proposal> {
        return this.proposalService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    createPool(@Body() createProposalDto: CreateProposalDto): Promise<Proposal> {
        return this.proposalService.create(createProposalDto);
    }

    @Delete(":id")
    removePool(@Param("id") id: string): Promise<Proposal> {
        return this.proposalService.remove(id);
    }

    @Put(":id")
    updatePool(@Body() updateProposalDto: UpdateProposalDto, @Param("id") id: string): Promise<Proposal> {
        return this.proposalService.update(id, updateProposalDto);
    }
}
