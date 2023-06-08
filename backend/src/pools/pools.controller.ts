import { Controller, Get, Param, Post, Delete, Put, Body, HttpCode, HttpStatus, Header } from '@nestjs/common';
import { CreatePoolDto } from './dto/create-pool.dto';
import { UpdatePoolDto } from './dto/update-pool.dto';
import { PoolsService } from './pools.service';
import { Pool } from './schemas/pool.schema';

@Controller('pools')
export class PoolsController {

    constructor(private readonly poolService: PoolsService) { 
    }

    @Get()
    getAllPools(): Promise<Pool[]> {
        return this.poolService.getAll()
    }

    @Get(':id')
    getOnePool(@Param('id') id: string): Promise<Pool> {
        return this.poolService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    createPool(@Body() createPoolDto: CreatePoolDto): Promise<Pool> {
        return  this.poolService.create(createPoolDto) 
    }

    @Delete(':id')
    removePool(@Param('id') id: string): Promise<Pool> {
        return this.poolService.remove(id)
    }

    @Put(':id')
    updatePool(@Body() updatePoolDto: UpdatePoolDto, @Param('id') id: string): Promise<Pool> {
        return this.poolService.update(id, updatePoolDto)
    }
}
