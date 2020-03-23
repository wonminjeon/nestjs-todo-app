import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';
import { TodoRepository } from './todo.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoRepository)
    private todoRepository: TodoRepository,
  ) {}
  // getAllTodos(): Todo[] {
  //   return this.todos;
  // }
  // getTodoWithFilters(filterDto: GetTodosFilterDto): Todo[] {
  //   const { status, search } = filterDto;
  //   let todos = this.getAllTodos();
  //   if (status) {
  //     todos = todos.filter(todo => todo.status === status);
  //   }
  //   if (search) {
  //     todos = todos.filter(
  //       todo =>
  //         todo.title.includes(search) || todo.description.includes(search),
  //     );
  //   }
  //   return todos;
  // }

  async getTodoById(id: number): Promise<Todo> {
    const found = await this.todoRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with ID ${id} not found.`);
    }

    return found;
  }

  // createTodo(createTodoDto: CreateTodoDto): Todo {
  //   const { title, description } = createTodoDto;
  //   const todo: Todo = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TodoStatus.OPEN,
  //   };
  //   this.todos.push(todo);
  //   return todo;
  // }
  // deleteTodo(id: string): void {
  //   const found = this.getTodoById(id);
  //   this.todos = this.todos.filter(todo => todo.id !== found.id);
  // }
  // updateTodoStatus(id: string, status: TodoStatus): Todo {
  //   const found = this.getTodoById(id);
  //   found.status = status;
  //   return found;
  // }
}
