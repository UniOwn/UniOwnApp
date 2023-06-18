import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Proposal, ProposalDocument } from "./schemas/proposal.schema";
import { UpdateProposalDto } from "./dto/update-proposal.dto";
import { CreateProposalDto } from "./dto/create-proposal.dto";

@Injectable()
export class ProposalsService {
    constructor(@InjectModel(Proposal.name) private proposalModel: Model<ProposalDocument>) {}

    async getAll(): Promise<Proposal[]> {
        return this.proposalModel.find().exec();
    }

    async getById(id: string) {
        return this.proposalModel.findById(id);
    }

    async create(proposalDto: CreateProposalDto): Promise<Proposal> {
        const newProposal = new this.proposalModel(proposalDto);

        return newProposal.save();
    }

    async remove(id: string): Promise<Proposal> {
        return this.proposalModel.findByIdAndRemove(id);
    }

    async update(id: string, proposalDto: UpdateProposalDto): Promise<Proposal> {
        return this.proposalModel.findByIdAndUpdate(id, proposalDto, { new: true });
    }
}
