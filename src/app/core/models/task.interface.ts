import { TaskPriorityEnum, TaskStatusEnum } from "../enums/task.enum";
import { User } from "./user.interface";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatusEnum;
  priority: TaskPriorityEnum;
  assignedTo?: User;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}