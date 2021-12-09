import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { TodoMapperService } from './services/todo-mapper/todo-mapper.service';
import { TodoService } from './services/todo/todo.service';
import { TodoController } from './controllers/todo/todo.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo])
    ],
    providers: [TodoMapperService, TodoService],
    controllers: [TodoController]
})
export class TodoModule {}
