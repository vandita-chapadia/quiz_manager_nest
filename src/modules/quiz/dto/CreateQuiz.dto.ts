import { IsNotEmpty, Length } from "class-validator"

export class CreateQuizDto {

    @IsNotEmpty({
        message: "A Quiz should have a title"
    })

    @Length(2, 255)
    title: string


    @IsNotEmpty()
    @Length(3)
    description: string
}