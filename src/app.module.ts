import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { RestEndpointsModule } from './rest-endpoints/rest-endpoints.module';
import { GraphqlEndpointsModule } from './graphql-endpoints/graphql-endpoints.module';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env`],
      isGlobal: true,
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true, driver: ApolloDriver }),
    RestEndpointsModule,
    GraphqlEndpointsModule,
    AuthenticationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
