import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Image} from "./entity/image.entity";
import {CreateImageInput} from "./dto/createImage.input";

@Injectable()
export class ImageService {
    constructor(
        @InjectModel(Image.name)
        private readonly imageModel: Model<Image>
    ) {}

    async getImages() {
        try{
            const users = await this.imageModel.find();

            if (!users) {
                return "images not found"
            }
            return users;
        }
        catch (error) {
            return new Error(error.message)
        }
    }

    createImage(createImageInput: CreateImageInput) {
        try{
            const image = new this.imageModel(createImageInput);
            return image.save();
        }
        catch (error) {
            return new Error(error.message)
        }
    }
}
