// src/app/services/device-info.service.ts
import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  constructor() { }

  async getDeviceInfo() {
    try {
      // In browser, uses various navigator properties
      const info = await Device.getInfo();
      return info;
      // Log available browser information:
      console.log({
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
      });
    } catch (error) {
      console.error('Error getting device info:', error);
      throw error;
    }


  }
}