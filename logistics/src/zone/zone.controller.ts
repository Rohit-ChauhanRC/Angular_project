import { Controller ,Post,Body,Get,Delete,Param, Put} from '@nestjs/common';
import {Zone} from './zone.entity';
import {ZoneService} from './zone.service';
import { create } from 'domain';
import { Index } from 'typeorm';
import { async } from 'rxjs/internal/scheduler/async';


@Controller('zones')
export class ZoneController {

  constructor(private zoneservice :ZoneService){}
  
  @Get()
  index():Promise<Zone[]>{
    return this.zoneservice.findAll();
  }
  @Post('create')
  async create(@Body() zoneData:Zone):Promise<any>{
    return this.zoneservice.create(zoneData)
  }
  @Put(':id/update')
  async update(@Param('id') id, @Body() zoneData:Zone):Promise<any>{
    zoneData.id = Number(id);
    console.log('Update #' + zoneData.id);
    return this.zoneservice.update(zoneData);
  }
  @Delete(':id/delete')
  async delete(@Param('id') id):Promise<any>{
    return this.zoneservice.delete(id);
  }
}
