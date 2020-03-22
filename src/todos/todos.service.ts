import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }
}
