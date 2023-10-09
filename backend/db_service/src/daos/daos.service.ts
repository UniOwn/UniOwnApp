import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { CreateDaoDto } from "./dto/create-dao.dto";
import { Dao, DaoDocument } from "./schemas/dao.schema";
import { UpdateDaoDto } from "./dto/update-dao.dto";

@Injectable()
export class DaosService {
    constructor(@InjectModel(Dao.name) private daoModel: Model<DaoDocument>) {}

    async getAll(): Promise<Dao[]> {
        return this.daoModel.find().exec();
    }

    async getById(id: string) {
        return this.daoModel.findById(id);
    }

    async create(daoDto: CreateDaoDto): Promise<Dao> {
        const newPool = new this.daoModel(daoDto);

        return newPool.save();
    }

    async remove(id: string): Promise<Dao> {
        return this.daoModel.findByIdAndRemove(id);
    }

    async update(id: string, poolDto: UpdateDaoDto): Promise<Dao> {
        return this.daoModel.findByIdAndUpdate(id, poolDto, { new: true });
    }
}
