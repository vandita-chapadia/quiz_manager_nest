import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { QuestionRepository } from './repositories/question.repository';
import { OptionRepository } from './repositories/option.repository';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';


@Module({

    controllers: [QuizController, QuestionController, OptionController],
    imports: [TypeOrmModule.forFeature([QuizRepository, QuestionRepository, OptionRepository])],
    providers: [QuizService, QuestionService, OptionService]
})
export class QuizModule {

}
