import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('quizes')

export class Quiz extends BaseEntity {

    @PrimaryGeneratedColumn({
        comment: 'unique identify by id'
    })
    id: number

    @Column({
        type: 'varchar'
    })
    title: string

    @Column({
        type: 'varchar'
    })
    description: string

    @Column({
        type: 'boolean',
        default: 1
    })
    isActive: boolean

    @OneToMany(() => Question, (question) => question.quiz)
    questions: Question[];

}