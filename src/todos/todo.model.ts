export interface Todo {
  id: string;
  title: string;
  description: string;
  status: string;
}

export enum TodoStatus {
  OPEN = 'OPEN',
  DONE = 'DONE',
}
