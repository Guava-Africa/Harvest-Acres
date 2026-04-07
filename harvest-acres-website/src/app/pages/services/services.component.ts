import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageWrapperComponent } from '../../shared/page-wrapper/page-wrapper.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    PageWrapperComponent,
    SectionTitleComponent,
    CardComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {}