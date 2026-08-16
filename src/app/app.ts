import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './task.model';
import { TodoItem } from './todo-item/todo-item';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TodoItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  newTaskTitle = '';

  tasks: Task[] = [
    { title: 'Learn Angular', completed: false },
    { title: 'Finish Homework', completed: true },
    { title: 'Buy Milk', completed: false }
  ];

  addTask(): void {
    const title = this.newTaskTitle.trim();
    if (!title) {
      return;
    }

    this.tasks.push({ title, completed: false });
    this.newTaskTitle = '';
  }

  toggleComplete(task: Task): void {
    task.completed = !task.completed;
  }

  deleteTask(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
  }

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completedTasks(): number {
    return this.tasks.filter(t => t.completed).length;
  }

  get allCompleted(): boolean {
    return this.tasks.length > 0 && this.completedTasks === this.totalTasks;
  }
}
