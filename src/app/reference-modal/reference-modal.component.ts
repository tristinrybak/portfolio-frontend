import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-reference-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reference-modal.component.html',
  styleUrl: './reference-modal.component.css'
})
export class ReferenceModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() submitForm = new EventEmitter<any>();

  endorsement = {
    name: '',
    company: '',
    title: '',
    duration: '',
    referral: ''
  };

  onSubmit() {
    // Handle form submission
    // Emit the form data to the parent component
    this.submitForm.emit(this.endorsement);
    // Close the modal
    this.close.emit();
  }
}
