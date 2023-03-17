import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item';
import { StorageService } from './storage.service.service';
import { v4 as uuid } from 'uuid';
const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList: TodoItem[];

  constructor(private storageService: StorageService) {
    this.todoList =
      storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }

  getTodoList(): TodoItem[] {
    return this.todoList;
  }

  addItem(item: TodoItem): void {
    item.id=uuid()
    this.todoList.push(item);
    this.saveList();
  }

  getItem(item:TodoItem){
    const index = this.todoList.indexOf(item);
    console.log(this.todoList[index] )
    return this.todoList[index];
    
  }

  updateItem(item: TodoItem, changes:any): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }

  deleteItem(item: TodoItem): void {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
