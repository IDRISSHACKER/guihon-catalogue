import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import env from "./common/constants/settings";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import { join } from "path"
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        debug: !env.PROD,
        playground: !env.PROD,
          typePaths: ["./models/**/*.graphql"],
          definitions: {
            path: join(process.cwd(), 'src/graphql.ts'),
            outputAs: 'class'
          }
      }),
      UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, UsersService]
})

export class AppModule {}
