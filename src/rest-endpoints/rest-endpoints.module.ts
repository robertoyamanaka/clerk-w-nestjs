import { Module } from '@nestjs/common';
import { RestEndpointsService } from './rest-endpoints.service';
import { RestEndpointsController } from './rest-endpoints.controller';

@Module({
  controllers: [RestEndpointsController],
  providers: [RestEndpointsService],
})
export class RestEndpointsModule {}
