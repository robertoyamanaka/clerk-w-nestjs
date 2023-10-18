import { Injectable } from '@nestjs/common';

@Injectable()
export class RestEndpointsService {
  pingOne(id: string) {
    return `REST Ping #${id}!`;
  }
}
