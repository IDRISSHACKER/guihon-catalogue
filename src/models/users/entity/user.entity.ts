import { ObjectType, Field, } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class User {

    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Prop()
    @Field(() => String, { description: 'Name of user' })
    username: string;

    @Prop()
    @Field(() => String, { description: 'User email' })
    email: string;

    @Prop()
    @Field(() => String, { description: 'User phone' })
    phone: string;

    @Prop()
    @Field(() => String, { description: 'User facebook account' })
    facebook: string;

    @Prop()
    @Field(() => String, { description: 'User password' })
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
