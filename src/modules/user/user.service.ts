import { Injectable } from "@nestjs/common";
import { UserRegisterReqDto } from "./dto/user.register.req.dto";
import { User } from "./user.entity";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {

    async doUserRegister(userRegister: UserRegisterReqDto): Promise<User> {
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(userRegister.password, salt)
        const user = new User();
        user.name = userRegister.name;
        user.email = userRegister.email;
        user.password = password;
        return await user.save();


    }
}