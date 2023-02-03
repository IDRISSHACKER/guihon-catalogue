import {Resolver, Query, Mutation, Args} from "@nestjs/graphql";
import {Image} from "./entity/image.entity";
import {ImageService} from "./image.service";
import {CreateImageInput} from "./dto/createImage.input";


@Resolver(() => Image)
export class ImageResolver {
    constructor(private readonly imageService: ImageService) {}

    @Query(() => [Image])
    getImages() {
        return this.imageService.getImages()
    }

    @Mutation(() => Image)
    createImage(@Args('createImageInput') createImageInput: CreateImageInput) {
        return this.imageService.createImage(createImageInput)
    }
}
