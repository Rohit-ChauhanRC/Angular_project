import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Zone} from './zone.entity';
import {UpdateResult,DeleteResult} from 'typeorm';

@Injectable()
export class ZoneService {
  constructor(@InjectRepository(Zone) private zoneRepository: Repository<Zone>,){}

  async findAll(): Promise<Zone[]>{
    return await this.zoneRepository.find();
  }
  async create(zone:Zone): Promise<Zone>{
    return await this.zoneRepository.save(zone);
  }
  async update(zone:Zone): Promise<UpdateResult>{
    return await this.zoneRepository.update(zone.id,zone);
  }
  async delete(id):Promise<DeleteResult>{
    return await this.zoneRepository.delete(id);
  }
}
