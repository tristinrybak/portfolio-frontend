import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Import AppRoutingModule

import { AboutComponent } from './about/about.component';
import { TechStackComponent } from './tech-stack/tech-stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AboutComponent,
    TechStackComponent,
    ProjectsComponent,
    ReferencesComponent,
    ContactComponent,
    AppComponent,
  ],
  imports: [BrowserModule, AppRoutingModule], // Include AppRoutingModule here
  bootstrap: [AppComponent],
})
export class AppModule {}
