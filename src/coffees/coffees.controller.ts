import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get()
    findAll() {
        return 'This action returns all coffees';
    }

    @Get(':id')
    findOne(@Param() params) {
        return `This action returns #${params.id} coffee.`
    }
}
