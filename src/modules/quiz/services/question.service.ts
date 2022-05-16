import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "../dto/craete-question.dto";
import { QuestionRepository } from "../repositories/question.repository";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";

@Injectable()

export class QuestionService {

    constructor(@InjectRepository(QuestionRepository) private questionRepository: QuestionRepository) { }

    async createQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
        const newQuestion = await this.questionRepository.save({
            question: question.question
        });

        quiz.questions = [...quiz.questions, newQuestion]
        await quiz.save();
        return newQuestion;
    }

    findQuestionById(id: number) {
        return this.questionRepository.findOne(id, { relations: ['quiz', 'options'] })

    }

}