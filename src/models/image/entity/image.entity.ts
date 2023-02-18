import { ObjectType, Field } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Image {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  @Field(() => String, { description: 'Path of staged file' })
  path: string;

  @Prop({ required: true })
  @Field(() => String, { description: 'Label of file' })
  label: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
