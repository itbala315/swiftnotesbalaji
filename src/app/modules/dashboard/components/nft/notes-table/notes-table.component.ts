import { Component, OnInit } from '@angular/core';
import { Nft } from '../../../models/note';
import { TodoListService } from '../services/todo-list.service';
import { MatDialog } from '@angular/material/dialog';
import {AddEditNotesComponent} from '../add-edit-notes/add-edit-notes.component'

@Component({
  selector: '[nft-auctions-table]',
  templateUrl: './notes-table.component.html',
})
export class NftAuctionsTableComponent implements OnInit {
  public tasks: Nft[] = [];
  blnShow: boolean = false;

  
  constructor(private todoListService: TodoListService,public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.tasks=this.todoListService.getTodoList();
    console.log(this.tasks?.length)
    if(this.tasks?.length > 0){
      this.blnShow=true;
    }
  }

  onEdit(task:any):void{
  
    let obj=this.todoListService.getItem(task);
    const dialogRef = this.dialog.open(AddEditNotesComponent, {
       data: obj,
    });

  }
}
