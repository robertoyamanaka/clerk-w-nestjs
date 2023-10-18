import { CreateGraphqlEndpointInput } from './create-graphql-endpoint.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGraphqlEndpointInput extends PartialType(CreateGraphqlEndpointInput) {
  @Field(() => Int)
  id: number;
}
