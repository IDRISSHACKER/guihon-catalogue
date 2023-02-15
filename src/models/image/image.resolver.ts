import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Image as IM} from "./entity/image.entity";
import {ImageService} from "./image.service";
import {CreateImageInput} from "./dto/createImage.input";


@Resolver(() => IM)
export class ImageResolver {
    constructor(private readonly imageService: ImageService) {}

    @Query(() => [IM])
    getImages(): Promise<any> {
        return this.imageService.getImages()
    }

    @Mutation(() => IM)
    createImage(@Args('createImageInput') createImageInput: CreateImageInput): Promise<any> {
        return this.imageService.createImage(createImageInput)
    }

    @Mutation(() => IM)
     async deleteImage(@Args('_id') id: string): Promise<any> {
        return await this.imageService.deleteImage(id)
    }
}
