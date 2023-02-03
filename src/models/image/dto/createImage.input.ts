import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class CreateImageInput{

    @Field(() => String, {description: 'Path of staged file'})
    path: string;

    @Field(() => String, {description:  'Label of file'})
    label: string;
}
