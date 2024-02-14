import { Component, ElementRef } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from '../chatbox/chatbox.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ChatboxComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(private elRef: ElementRef) { }

  scrollToAboutSection(): void {
    const aboutSection = this.elRef.nativeElement.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  isVisible: boolean = false;
  toggleChatbox() {
    this.isVisible = !this.isVisible;
  }
}
