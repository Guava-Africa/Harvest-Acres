import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageWrapperComponent } from '../../shared/page-wrapper/page-wrapper.component';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [PageWrapperComponent, RouterModule],
  templateUrl: './business.component.html',
})
export class BusinessComponent {}
