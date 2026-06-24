import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageWrapperComponent } from '../../shared/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageWrapperComponent, RouterModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {}
