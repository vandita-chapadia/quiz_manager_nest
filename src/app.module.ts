import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './modules/quiz/entities/quiz.entity';
import { Question } from './modules/quiz/entities/question.entity';
import { Option } from './modules/quiz/entities/option.entity';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/user.entity';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(
    {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Van4ha6093@',
      database: 'quiz_manager_nest',
      entities: [Quiz, Question, Option,User],
      synchronize: true,
      logging: true
    }
  ), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
