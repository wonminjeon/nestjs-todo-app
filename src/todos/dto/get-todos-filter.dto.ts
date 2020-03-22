import { TodoStatus } from '../todo.model';

export class GetTodosFilterDto {
  status: TodoStatus;
  search: string;
}
