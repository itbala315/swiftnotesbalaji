import { Component ,Inject,EventEmitter, OnInit, Output} from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { MatDialog,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-add-edit-notes',
  templateUrl: './add-edit-notes.component.html',
  styleUrls: ['./add-edit-notes.component.scss']
})
export class AddEditNotesComponent implements OnInit {
  titleHeader='Add Notes';
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    notes: new FormControl('')
  });
  response: any;
  submitted = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private formBuilder: FormBuilder,
    private todoListService: TodoListService,
    public dialog: MatDialogRef<AddEditNotesComponent>
   ) { 
    this.response = data;
    
   }
  
   ngOnInit(): void {
     
     this.form = this.formBuilder.group(
      {
        title: ['', Validators.required],
        notes: ['', Validators.required],
      })
      // Set Values
      if(this.response){
        this.titleHeader="Update Notes"
        this.form.controls["title"].setValue(this.response?.title);
        this.form.controls["notes"].setValue(this.response?.notes)
      }
      
      
   }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void{
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.response?this.todoListService.updateItem(this.response,this.form.value):this.todoListService.addItem(this.form.value);
    this.dialog.close();
  }

  onCancel():void{
    this.dialog.close();
  }
}
