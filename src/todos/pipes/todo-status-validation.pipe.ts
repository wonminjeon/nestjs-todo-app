import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TodoStatus } from '../todo-status.enum';

export class TodoStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [TodoStatus.OPEN, TodoStatus.DONE];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status.`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    return this.allowedStatuses.includes(status);
  }
}
