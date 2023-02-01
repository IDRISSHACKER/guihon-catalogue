import {Resolver, Query, Mutation, Args} from "@nestjs/graphql";
import {UsersService} from "./users.service";
import {CreateUserInput} from "./dto/createUser.input";
import {User} from "./entity/user.entity";

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) {}

    @Query(() => [User])
    getUsers() {
        return this.usersService.getUsers()
    }

    @Mutation(() => User)
    createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return this.usersService.createUser(createUserInput)
    }
}
