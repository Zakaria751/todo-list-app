import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  @Input() task!: Task;

  @Output() delete = new EventEmitter<void>();
  @Output() toggleComplete = new EventEmitter<void>();

  onDelete(): void {
    this.delete.emit();
  }

  onToggleComplete(): void {
    this.toggleComplete.emit();
  }
}
