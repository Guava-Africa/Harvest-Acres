import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageWrapperComponent } from '../../shared/page-wrapper/page-wrapper.component'; 
import { SectionTitleComponent } from '../../shared/section-title/section-title.component'; 
import { CardComponent } from '../../shared/card/card.component'; 

// ✅ Only this import needed
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PageWrapperComponent,
    SectionTitleComponent,
    CardComponent,

    // ✅ Import module directly (no .pick)
    LucideAngularModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}