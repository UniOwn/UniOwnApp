import { Controller, Get, Param, Post, Delete, Put, Body, HttpCode, HttpStatus, Header } from "@nestjs/common";

import { CreateDaoDto } from "./dto/create-dao.dto";
import { UpdateDaoDto } from "./dto/update-dao.dto";
import { DaosService } from "./daos.service";
import { Dao } from "./schemas/dao.schema";

@Controller("daos")
export class DaosController {
    constructor(private readonly poolService: DaosService) {}

    @Get()
    getAllPools(): Promise<Dao[]> {
        return this.poolService.getAll();
    }

    @Get(":id")
    getOnePool(@Param("id") id: string): Promise<Dao> {
        return this.poolService.getById(id);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header("Cache-Control", "none")
    createPool(@Body() createDaoDto: CreateDaoDto): Promise<Dao> {
        return this.poolService.create(createDaoDto);
    }

    @Delete(":id")
    removePool(@Param("id") id: string): Promise<Dao> {
        return this.poolService.remove(id);
    }

    @Put(":id")
    updatePool(@Body() updateDaoDto: UpdateDaoDto, @Param("id") id: string): Promise<Dao> {
        return this.poolService.update(id, updateDaoDto);
    }
}
