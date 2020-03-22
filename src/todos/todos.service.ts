import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import * as uuid from 'uuid/v1';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  createTodo(title: string, description: string): Todo {
    const todo: Todo = {
      id: uuid(),
      title,
      description,
      completed: false,
    };

    this.todos.push(todo);
    return todo;
  }
}
