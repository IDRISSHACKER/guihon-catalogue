import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import env from "./common/constants/settings";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import { join } from "path"
import {UsersModule} from "./models/users/users.module";
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        debug: !env.PROD,
        playground: !env.PROD,
          autoSchemaFile: join(process.cwd(), "src/schema.gql"),
          sortSchema: true,
      }),
      MongooseModule.forRoot(env.DB, {
      }),
      UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})

export class AppModule {}
