import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGraphqlEndpointInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
