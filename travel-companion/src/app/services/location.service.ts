// src/app/services/location.service.ts
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  async getCurrentPosition() {
    try {
      // In browser, uses navigator.geolocation.getCurrentPosition()
      const coordinates = await Geolocation.getCurrentPosition();
      return coordinates;
    } catch (error) {
      console.error('Error getting location:', error);
      throw error;
    }

    // Monitor actual position updates:
    navigator.geolocation.watchPosition((position) => {
      console.log('New position:', position);
});
  }
}