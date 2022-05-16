import { Controller, Post, Body, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/craete-question.dto";
import { Question } from "../entities/question.entity";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";


@Controller('question')
@UsePipes(ValidationPipe)
export class QuestionController {

    constructor(private questionService: QuestionService, private quizService: QuizService) { }

    @Post('/')
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(question.quizId)

        return this.questionService.createQuestion(question, quiz);
    }

}