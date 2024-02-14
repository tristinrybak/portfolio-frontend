import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';

export const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'tech-stack', component: TechStackComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'references', component: ReferencesComponent },
    { path: 'contact', component: ContactComponent },
  ];
