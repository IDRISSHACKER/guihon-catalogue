import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class CreateUserInput{
    @Field(() => String, {description: 'Name of user'})
    username: string;

    @Field(() => String, {description: 'User email address'})
    email: string;

    @Field(() => String, {description: 'User phone number'})
    phone: string;

    @Field(() => String, {description: 'User facebook account'})
    facebook: string;

    @Field(() => String, {description: 'User login password'})
    password: string

}
