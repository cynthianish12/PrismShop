// src/geolocation.service.ts
import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GeolocationService {
  private readonly apiUrl = 'https://ipinfo.io';

  async getGeolocation(ip: string): Promise<any> {
    const token = '01ed0257498484'; 
    try {
      const response = await axios.get(`${this.apiUrl}/${ip}?token=${token}`);
      console.log('API Response:', response.data); 
      return response.data;
    } catch (error) {
      console.error('Error fetching geolocation:', error);
      throw new Error('Failed to fetch geolocation');
    }
  }
}
