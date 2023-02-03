import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageResolver } from './image.resolver';
import {MongooseModule} from "@nestjs/mongoose";
import {Image, ImageSchema} from "./entity/image.entity";

@Module({
  providers: [ImageService, ImageResolver],
  imports: [
      MongooseModule.forFeature([
        {
          name: Image.name,
          schema: ImageSchema
        }
      ])
  ]
})
export class ImageModule {}
