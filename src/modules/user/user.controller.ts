import { Body, Controller, HttpStatus, Post, ValidationPipe } from "@nestjs/common";
import { UserRegisterReqDto } from "./dto/user.register.req.dto";
import { UserService } from "./user.service";
import { User } from "./user.entity"

@Controller('/user')
export class UserController {

    constructor(private userService: UserService) { }

    @Post('/register')
    async doUserRegisster(@Body(new ValidationPipe({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
    })) userRegister: UserRegisterReqDto,): Promise<User> {
        return await this.userService.doUserRegister(userRegister)

    }


}