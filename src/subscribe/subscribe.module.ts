import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscribeService } from './subscribe.service';
import { SubscribeEntity } from './entities/subscribe.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SubscribeEntity]), 
  ],
  providers: [SubscribeService],
  exports: [SubscribeService], 
})
export class SubscribeModule {}
