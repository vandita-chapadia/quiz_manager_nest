import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Question } from "../entities/question.entity";
import { QuizRepository } from "../repositories/quiz.repository";
import { Quiz } from '../entities/quiz.entity';

@Injectable()

export class QuizService {

    constructor(
        @InjectRepository(QuizRepository) private quizRepository: QuizRepository
    ) { }
    async getAllquiz(): Promise<[Quiz[], number]> {
        return await this.quizRepository
            .createQueryBuilder('q')
            .leftJoinAndSelect('q.questions', 'qt')
            .leftJoinAndSelect('qt.options', 'o')
            .take(1)
            .getManyAndCount();
    }

    async getQuizById(id: number) {
        return await this.quizRepository.findOne(id, { relations: ['questions', 'question.options'] })
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz)
    }


}