import { Repository, EntityRepository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodoStatus } from './todo-status.enum';
import { GetTodosFilterDto } from './dto/get-todos-filter.dto';

@EntityRepository(Todo)
export class TodoRepository extends Repository<Todo> {
  async getTodos(filterDto: GetTodosFilterDto): Promise<Todo[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('todo');

    if (status) {
      query.andWhere('todo.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(todo.title LIKE :search OR todo.description LIKE :search)',
        { search: `%${search}%` },
      );
    }

    const todos = await query.getMany();
    return todos;
  }

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const { title, description } = createTodoDto;

    const todo = new Todo();
    todo.title = title;
    todo.description = description;
    todo.status = TodoStatus.OPEN;
    await todo.save();

    return todo;
  }
}
