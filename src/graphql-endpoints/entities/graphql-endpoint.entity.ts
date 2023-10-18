import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class GraphqlEndpoint {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
