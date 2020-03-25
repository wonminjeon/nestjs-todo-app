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
  UseGuards,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatus } from './todo-status.enum';
import { TodoStatusValidationPipe } from './pipes/todo-status-validation.pipe';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('todos')
@UseGuards(AuthGuard())
export class TodosController {
  constructor(private todosService: TodosService) {}

  @Get()
  getTodos(@Query(ValidationPipe) filterDto: GetTodosFilterDto) {
    return this.todosService.getTodos(filterDto);
  }

  @Get('/:id')
  getTodoById(@Param('id', ParseIntPipe) id: number): Promise<Todo> {
    return this.todosService.getTodoById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTodoDto: CreateTodoDto,
    @GetUser() user: User,
  ): Promise<Todo> {
    return this.todosService.createTodo(createTodoDto, user);
  }

  @Delete('/:id')
  deleteTodo(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.todosService.deleteTodo(id);
  }

  @Patch('/:id')
  updateTodoStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', TodoStatusValidationPipe) status: TodoStatus,
  ): Promise<Todo> {
    return this.todosService.updateTodoStatus(id, status);
  }
}
