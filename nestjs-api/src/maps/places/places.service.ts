import { Injectable } from '@nestjs/common';
import {Client as GoogleMapsClient} from '@googlemaps/google-maps-services-js'

@Injectable()
export class PlacesService {
  constructor(private: googleMapsClient: GoogleMapsClient) { }
  
  findPlaces(text: string) {
    new GoogleMapsClient();
  }
}
