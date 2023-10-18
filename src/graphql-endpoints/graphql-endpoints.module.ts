import { Module } from '@nestjs/common';
import { GraphqlEndpointsService } from './graphql-endpoints.service';
import { GraphqlEndpointsResolver } from './graphql-endpoints.resolver';

@Module({
  providers: [GraphqlEndpointsResolver, GraphqlEndpointsService],
})
export class GraphqlEndpointsModule {}
