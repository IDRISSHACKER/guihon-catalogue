import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
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

    @Mutation(() => Image)
     async deleteImage(@Args('_id') id: string) {
        return await this.imageService.deleteImage(id)
    }
}
