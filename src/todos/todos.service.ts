import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import * as uuid from 'uuid/v1';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
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
      completed: false,
    };

    this.todos.push(todo);
    return todo;
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  updateTodoStatus(id: string): Todo {
    const todo = this.getTodoById(id);
    todo.completed = !todo.completed;
    return todo;
  }
}
