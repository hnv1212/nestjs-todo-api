import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { ObjectID } from "typeorm";

export class AddTodoDto {
  @IsString()
  @IsNotEmpty()
  public readonly title: string;

  public constructor(opts?: Partial<AddTodoDto>) {
    Object.assign(this, opts);
  }
}

export class EditTodoDto {
  @IsString()
  @IsNotEmpty()
  public readonly title: string;

  @IsBoolean()
  public readonly completed: boolean;

  public constructor(opts?: Partial<EditTodoDto>) {
    Object.assign(this, opts);
  }
}

export class TodoDto {
  public readonly id: ObjectID;
  public readonly title: string;
  public readonly completed: boolean;

  public constructor(opts?: Partial<TodoDto>) {
    Object.assign(this, opts);
  }
}
