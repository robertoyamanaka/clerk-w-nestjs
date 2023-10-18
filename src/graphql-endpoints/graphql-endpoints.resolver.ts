import { Resolver, Query, Args } from '@nestjs/graphql';
import { GraphqlEndpointsService } from './graphql-endpoints.service';
import { GraphqlEndpoint } from './entities/graphql-endpoint.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Resolver(() => GraphqlEndpoint)
export class GraphqlEndpointsResolver {
  constructor(
    private readonly graphqlEndpointsService: GraphqlEndpointsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => String, { name: 'pingOne' })
  pingOne(@Args('id') id: string) {
    return this.graphqlEndpointsService.pingOne(id);
  }
}
