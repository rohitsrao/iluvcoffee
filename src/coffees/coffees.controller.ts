import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
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
    findOne(@Param('id') id: string) {
        const coffee = this.coffesService.findOne(id);
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found.`);
        }
        return coffee;
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffesService.create(createCoffeeDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffesService.update(id, updateCoffeeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffesService.remove(id);
    }
}
