import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphqlEndpointsService {
  pingOne(id: string) {
    return `GraphQL Ping #${id}!`;
  }
}
