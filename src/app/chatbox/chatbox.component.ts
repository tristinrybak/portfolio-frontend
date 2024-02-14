import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {
  isChatboxOpen: boolean = false;

  toggleChatbox() {
    this.isChatboxOpen = !this.isChatboxOpen;
  }
}
