import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreatePoolDto } from "./dto/create-pool.dto";
import { Pool, PoolDocument } from "./schemas/pool.schema";
import { UpdatePoolDto } from "./dto/update-pool.dto";

@Injectable()
export class PoolsService {
    constructor(@InjectModel(Pool.name) private poolModel: Model<PoolDocument>) {}

    async getAll(): Promise<Pool[]> {
        return this.poolModel.find().exec();
    }

    async getById(id: string) {
        return this.poolModel.findById(id);
    }

    async create(poolDto: CreatePoolDto): Promise<Pool> {
        const newPool = new this.poolModel(poolDto);

        return newPool.save();
    }

    async remove(id: string): Promise<Pool> {
        return this.poolModel.findByIdAndRemove(id);
    }

    async update(id: string, poolDto: UpdatePoolDto): Promise<Pool> {
        return this.poolModel.findByIdAndUpdate(id, poolDto, { new: true });
    }
}
