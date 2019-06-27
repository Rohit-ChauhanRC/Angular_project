import { Module } from '@nestjs/common';
import { ZoneService } from './zone.service';
import { ZoneController } from './zone.controller';
import {Zone} from './zone.entity';
import { TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Zone]),
  ],
  providers: [ZoneService],
  controllers: [ZoneController]
})
export class ZoneModule {}
