import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
  private todos = [];

  getAllTodos() {
    return this.todos;
  }
}
