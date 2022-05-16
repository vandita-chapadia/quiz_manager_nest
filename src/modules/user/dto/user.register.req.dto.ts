import { IsEmail, IsEmpty, IsNotEmpty, Length, Matches } from "class-validator";

export class UserRegisterReqDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(8, 24)
    @Matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    password: string;

    @IsNotEmpty()
    @Length(8, 24)
    @Matches("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")
    confirm: string;
}