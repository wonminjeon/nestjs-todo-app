import { TodoStatus } from '../todo-status.enum';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTodosFilterDto {
  @IsOptional()
  @IsIn([TodoStatus.OPEN, TodoStatus.DONE])
  status: TodoStatus;

  @IsOptional()
  @IsNotEmpty()
  search: string;
}
