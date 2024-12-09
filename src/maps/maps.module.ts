import { Module } from '@nestjs/common';
import { PlacesService } from './places/places.service';
import { PlacesController } from './places/places.controller';
import { Client as GoogleMapsClient } from '@googlemaps/google-maps-services-js';

@Module({
  controllers: [PlacesController],
  providers: [
    PlacesService,
    {
      provide: GoogleMapsClient,
      useValue: new GoogleMapsClient(),
    },
  ],
})
export class MapsModule {}
