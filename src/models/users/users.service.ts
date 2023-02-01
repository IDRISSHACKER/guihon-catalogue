import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {CreateUserInput} from "./dto/createUser.input";
import {User} from "./entity/user.entity";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>
    ) {}

    async getUsers() {
        try{
            const users = await this.userModel.find();

            if (!users) {
                return "user not found"
            }
            return users;
        }
        catch (error) {
            return new Error(error.message)
        }
    }

     createUser(createUserInput: CreateUserInput) {
        try{
            const user = new this.userModel(createUserInput);
            return user.save();
        }
        catch (error) {
            return new Error(error.message)
        }
    }
}
