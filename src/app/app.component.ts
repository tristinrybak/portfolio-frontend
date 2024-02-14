import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ChatboxComponent } from './chatbox/chatbox.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ChatboxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-ui';

  isMenuOpen: boolean = false;

  toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu?.classList.toggle("open");
    icon?.classList.toggle("open");
  }

  isVisible: boolean = false;
  toggleChatbox() {
    this.isVisible = !this.isVisible;
  }
}
