import { Controller, Get, Req, InternalServerErrorException } from '@nestjs/common';
import { Request } from 'express';
import { GeolocationService } from './geolocation.service';

@Controller('content')
export class ContentController {
  constructor(private readonly geolocationService: GeolocationService) {}

  @Get()
  async getContent(@Req() req: Request): Promise<any> {
    try {
      const ip = req['visitorIp'];
      if (!ip) {
        throw new InternalServerErrorException('IP address not found');
      }
      
      console.log('Visitor IP:', ip);
      const location = await this.geolocationService.getGeolocation(ip);
      console.log('Location Data:', location);

      if (!location) {
        throw new InternalServerErrorException('Unable to retrieve geolocation');
      }

      const content = this.getCustomContent(location);
      return content;
    } catch (error) {
      console.error('Error retrieving content:', error);
      throw new InternalServerErrorException('Failed to retrieve content');
    }
  }

  getCustomContent(location: any): any {
    return {
      message: `Hello from ${location.city || 'unknown'}, ${location.country || 'unknown'}`,
    };
  }
}
