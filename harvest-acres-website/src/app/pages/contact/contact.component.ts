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
  readonly contactDetails = {
    email: 'info@harvestacres.africa',
    phones: [
      { display: '+263 242-257156', href: 'tel:+263242257156' },
      { display: '+263 242-2571571', href: 'tel:+2632422571571' },
    ],
    addressLines: ['No 1 Martin Road', 'Msasa, Harare'],
  };

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
