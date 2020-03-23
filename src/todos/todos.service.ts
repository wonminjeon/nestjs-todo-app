import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';
import { TodoRepository } from './todo.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { TodoStatus } from './todo-status.enum';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoRepository)
    private todoRepository: TodoRepository,
  ) {}

  getTodos(filterDto: GetTodosFilterDto) {}

  async getTodoById(id: number): Promise<Todo> {
    const found = await this.todoRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }

    return found;
  }

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoRepository.createTodo(createTodoDto);
  }

  async deleteTodo(id: number): Promise<void> {
    const result = await this.todoRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Todo with ID ${id} not found.`);
    }
  }

  async updateTodoStatus(id: number, status: TodoStatus): Promise<Todo> {
    const todo = await this.getTodoById(id);
    todo.status = status;
    await todo.save();
    return todo;
  }
}
