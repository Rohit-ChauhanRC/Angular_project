import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZoneModule } from './zone/zone.module';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(),
    ZoneModule,
    
  ],
  controllers:[AppController],
  providers:[AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection){}
}
