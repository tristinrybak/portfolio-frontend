// projects.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'Project A' },
    { title: 'Project B' },
    { title: 'Project C' },
    { title: 'Project D' },
    { title: 'Project E' },
    { title: 'Project F' },
    { title: 'Project G' },
    { title: 'Project H' },
    { title: 'Project I' }
  ];
}