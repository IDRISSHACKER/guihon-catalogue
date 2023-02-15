import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Image as IM} from "./entity/image.entity";
import {CreateImageInput} from "./dto/createImage.input";
import {join} from "path";
import * as fs from "fs";

@Injectable()
export class ImageService {
    constructor(
        @InjectModel(Image.name)
        private readonly imageModel: Model<IM>
    ) {}

    async getImages(filter: any = -1) {
        try{
            const users = await this.imageModel.find().sort({_id: filter});

            if (!users) {
                return "images not found"
            }
            return users;
        }
        catch (error) {
            return new Error(error.message)
        }
    }

    async createImage(createImageInput: CreateImageInput) {
        try{
            const image = await this.imageModel.create(createImageInput);
            return image.save();
        }
        catch (error) {
            return new Error(error.message)
        }
    }

    async deleteImage(id: string) {
        try{
            const UPLOAD_FOLDER = 'drive'

            const image = await this.imageModel.findOne({_id: id})

            const imagePathInDriver = image.path

            let rootToFile = join(process.cwd(), UPLOAD_FOLDER, imagePathInDriver)

            await fs.unlinkSync(rootToFile)

            return this.imageModel.deleteOne({_id: id})
        }
        catch (error) {
            return new Error(error.message)
        }
    }
}
