import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogNoteComponent } from '../dialog-note/dialog-note.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  demoTitle: string = 'Lorem ipsum dolor sit amet .';
  demoNote: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';

  clickedTitle: string;
  clickedText: string;
  obj: {};

  constructor(public service: ServicesService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog = () => {
    this.dialog.open(DialogNoteComponent);
  };

  openThisNote = (event) => {
    // event.target.title = this.clickedTitle;
    // event.target.textContent = this.clickedText;
    console.log(this.clickedTitle, this.clickedText);
  };
}
