import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { ContentController } from './geolocation.controller';
import { IpLoggerMiddleware } from 'src/utility/common/middlewares/ip-logger.middleware';

@Module({
  imports: [],
  controllers: [ContentController],
  providers: [GeolocationService],
})
export class GeolocationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IpLoggerMiddleware)
      .forRoutes('*');
  }
}
