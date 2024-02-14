// references.component.ts

import { Component } from '@angular/core';
import { References } from '../references.model';
import { ReferencesService } from '../references.service';

import { MatDialog } from '@angular/material/dialog';
import { ReferenceModalComponent } from '../reference-modal/reference-modal.component';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {

  constructor(public dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(ReferenceModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
