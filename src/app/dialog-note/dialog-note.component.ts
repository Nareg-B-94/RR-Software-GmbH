import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-dialog-note',
  templateUrl: './dialog-note.component.html',
  styleUrls: ['./dialog-note.component.scss'],
})
export class DialogNoteComponent implements OnInit {
  title: string;
  text: string;
  obj: {};
  constructor(public service: ServicesService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  addNote = () => {
    this.obj = {
      title: this.title,
      text: this.text,
    };
    this.service.allNotes.push(this.obj);
    this.title = '';
    this.text = '';
    // console.log(this.service.allNotes);
    this.dialog.ngOnDestroy();
  };
}
