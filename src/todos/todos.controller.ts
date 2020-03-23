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
  ParseIntPipe,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

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

  @Get('/:id')
  getTodoById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todosService.getTodoById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todosService.createTodo(createTodoDto);
  }

  @Delete('/:id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todosService.deleteTodo(id);
  }

  // @Patch('/:id')
  // updateTodoStatus(
  //   @Param('id') id: string,
  //   @Body('status', TodoStatusValidationPipe) status: TodoStatus,
  // ): Todo {
  //   return this.todosService.updateTodoStatus(id, status);
  // }
}
