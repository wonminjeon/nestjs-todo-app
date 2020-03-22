import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo, TodoStatus } from './todo.model';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getTodos(): Todo[] {
    return this.todosService.getAllTodos();
  }

  @Get('/:id')
  getTodoById(@Param('id') id: string): Todo {
    return this.todosService.getTodoById(id);
  }

  @Post()
  createTask(@Body() createTodoDto: CreateTodoDto): Todo {
    return this.todosService.createTodo(createTodoDto);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: string): void {
    this.todosService.deleteTodo(id);
  }

  @Patch('/:id')
  updateTodoStatus(
    @Param('id') id: string,
    @Body('status') status: TodoStatus,
  ): Todo {
    return this.todosService.updateTodoStatus(id, status);
  }
}
