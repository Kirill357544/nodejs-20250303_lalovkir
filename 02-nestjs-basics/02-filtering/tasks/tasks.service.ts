import { Injectable, NotFoundException } from "@nestjs/common";
import { SortBy, Task, TaskStatus } from "./task.model";

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: "1",
      title: "Task 1",
      description: "First task",
      status: TaskStatus.PENDING,
    },
    {
      id: "2",
      title: "Task 2",
      description: "Second task",
      status: TaskStatus.IN_PROGRESS,
    },
    {
      id: "3",
      title: "Task 3",
      description: "Third task",
      status: TaskStatus.COMPLETED,
    },
    {
      id: "4",
      title: "Task 4",
      description: "Fourth task",
      status: TaskStatus.PENDING,
    },
    {
      id: "5",
      title: "Task 5",
      description: "Fifth task",
      status: TaskStatus.IN_PROGRESS,
    },
  ];

  getFilteredTasks(
    status?: TaskStatus,
    page?: number,
    limit?: number,
    sortBy?: SortBy,
  ): Task[] {
    let tasks = status ? this.tasks.filter((task) => task.status === status) : this.tasks;

    if (status && tasks.length === 0) {
      throw new NotFoundException();
    }

    if (sortBy) {
      tasks.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    }

    if (page && limit) {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      tasks = tasks.slice(startIndex, endIndex);
    }

    return tasks;
  }
}
