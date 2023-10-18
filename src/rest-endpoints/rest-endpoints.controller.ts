import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { RestEndpointsService } from './rest-endpoints.service';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Controller('rest-endpoints')
export class RestEndpointsController {
  constructor(private readonly restEndpointsService: RestEndpointsService) {}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  pingOne(@Param('id') id: string) {
    return this.restEndpointsService.pingOne(id);
  }
}
