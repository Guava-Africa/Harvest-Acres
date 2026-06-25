import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

interface ContactFormModel {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  readonly inquiryTypes = [
    'General Inquiry',
    'Wholesale / Distribution',
    'Partnership',
    'Product Availability',
    'Careers',
    'Other',
  ];

  submitted = false;

  form: ContactFormModel = {
    name: '',
    email: '',
    phone: '',
    subject: this.inquiryTypes[0],
    message: '',
  };

  onSubmit(): void {
    this.submitted = true;
  }

  resetForm(): void {
    this.submitted = false;
    this.form = {
      name: '',
      email: '',
      phone: '',
      subject: this.inquiryTypes[0],
      message: '',
    };
  }
}
