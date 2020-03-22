import { Injectable } from '@nestjs/common';
import { Todo, TodoStatus } from './todo.model';
import * as uuid from 'uuid/v1';
import { CreateTodoDto } from './dto/create-todo.dto';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoWithFilters(filterDto: GetTodosFilterDto): Todo[] {
    const { status, search } = filterDto;

    let todos = this.getAllTodos();

    if (status) {
      todos = todos.filter(todo => todo.status === status);
    }

    if (search) {
      todos = todos.filter(
        todo =>
          todo.title.includes(search) || todo.description.includes(search),
      );
    }

    return todos;
  }

  getTodoById(id: string): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  createTodo(createTodoDto: CreateTodoDto): Todo {
    const { title, description } = createTodoDto;
    const todo: Todo = {
      id: uuid(),
      title,
      description,
      status: 'OPEN',
    };

    this.todos.push(todo);
    return todo;
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  updateTodoStatus(id: string, status: TodoStatus): Todo {
    const todo = this.getTodoById(id);
    todo.status = status;
    return todo;
  }
}
