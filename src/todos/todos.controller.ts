import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}

  // @Get()
  // getTodos(@Query(ValidationPipe) filterDto: GetTodosFilterDto): Todo[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.todosService.getTodoWithFilters(filterDto);
  //   } else {
  //     return this.todosService.getAllTodos();
  //   }
  // }

  // @Get('/:id')
  // getTodoById(@Param('id') id: string): Todo {
  //   return this.todosService.getTodoById(id);
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTodoDto: CreateTodoDto): Todo {
  //   return this.todosService.createTodo(createTodoDto);
  // }

  // @Delete('/:id')
  // deleteTodo(@Param('id') id: string): void {
  //   this.todosService.deleteTodo(id);
  // }

  // @Patch('/:id')
  // updateTodoStatus(
  //   @Param('id') id: string,
  //   @Body('status', TodoStatusValidationPipe) status: TodoStatus,
  // ): Todo {
  //   return this.todosService.updateTodoStatus(id, status);
  // }
}
