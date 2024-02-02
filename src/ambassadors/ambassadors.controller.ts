import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmbassadorsService } from './ambassadors.service';
import { CreateAmbassadorDto } from './dto/create-ambassador.dto';
import { UpdateAmbassadorDto } from './dto/update-ambassador.dto';

@Controller('ambassadors')
export class AmbassadorsController {
  constructor(private readonly ambassadorsService: AmbassadorsService) {}

  @Post()
  create(@Body() createAmbassadorDto: CreateAmbassadorDto) {
    return this.ambassadorsService.create(createAmbassadorDto);
  }

  @Get()
  findAll() {
    return this.ambassadorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ambassadorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAmbassadorDto: UpdateAmbassadorDto) {
    return this.ambassadorsService.update(+id, updateAmbassadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ambassadorsService.remove(+id);
  }
}
