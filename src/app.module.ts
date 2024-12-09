import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MapsModule } from './maps/maps.module';
import { PlacesController } from './places/places.controller';

@Module({
  imports: [MapsModule],
  controllers: [AppController, PlacesController],
  providers: [AppService],
})
export class AppModule {}
