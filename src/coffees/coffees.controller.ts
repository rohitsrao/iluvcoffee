import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffesService: CoffeesService) {
    }

    @Get()
    findAll(@Query() paginationQuery) {
        //const { limit, offset } = paginationQuery;
        return this.coffesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Coffee {
        const coffee = this.coffesService.findOne(id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found.`);
        }
        return coffee;
    }

    @Post()
    create(@Body() body) {
        return this.coffesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body): void {
        return this.coffesService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) : void {
        return this.coffesService.remove(id);
    }
}
