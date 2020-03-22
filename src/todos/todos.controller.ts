import { Controller, Get } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getAllTodos(): Todo[] {
    return this.todosService.getAllTodos();
  }
}
