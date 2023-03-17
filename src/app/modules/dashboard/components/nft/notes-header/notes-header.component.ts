import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AddEditNotesComponent} from '../add-edit-notes/add-edit-notes.component'
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-nft-header',
  templateUrl: './notes-header.component.html',
})
export class NftHeaderComponent implements OnInit {
  constructor( public dialog: MatDialog) {}
  onAdd(){
    const dialogRef = this.dialog.open(AddEditNotesComponent, {
      width: '640px'
    });
 }

  ngOnInit(): void {}
}
