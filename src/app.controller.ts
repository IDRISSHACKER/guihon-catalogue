import {
  Controller,
  Get,
  HttpStatus,
  Ip,
  Next,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
  HttpException, StreamableFile
} from '@nestjs/common';
import { AppService } from './app.service';
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {generateUniqueFileName} from "./common/functions/filename";
import path, {join} from "path";
import mine = require('mime-types');
import {NextFunction} from "express";
import * as fs from "fs";
import {createReadStream} from "fs";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('file')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: 'drive',

      filename(req, file, callback) {
        callback(null, generateUniqueFileName(file.originalname));
      },
    }),
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if(file){
      return {
        file: file.filename
      }
    }else {
      throw new HttpException({
        message: 'Vous devez choisir un fichier'
      }, HttpStatus.FORBIDDEN)
    }
  }


  @Get(':filePath')
  async handleStreamFile(
      @Param() param: {filePath: string},
      @Res({ passthrough: true }) res,
      @Ip() ip,
      @Next() next: NextFunction,
  ) {
    const UPLOAD_FOLDER = 'drive'

    let rootToFile = join(process.cwd(), UPLOAD_FOLDER, param.filePath);

    if (!fs.existsSync(rootToFile)) {
      throw new HttpException(
          {
            status: HttpStatus.NOT_FOUND,
            message: 'The file was trying to get not found',
          },
          HttpStatus.NOT_FOUND,
      );
    }


      res.set({
        'Content-Type': mine.contentType(rootToFile),
      });
      const streamable = createReadStream(rootToFile);
      return new StreamableFile(streamable);
    }


}

