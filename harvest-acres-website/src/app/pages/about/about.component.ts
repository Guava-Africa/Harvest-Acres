import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageWrapperComponent } from '../../shared/page-wrapper/page-wrapper.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { CardComponent } from '../../shared/card/card.component';
import { LucideAngularModule } from 'lucide-angular';

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PageWrapperComponent,
    SectionTitleComponent,
    CardComponent,
    LucideAngularModule,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  advantages: Advantage[] = [
    {
      icon: 'sprout',
      title: 'Locally Sourced',
      description: 'Supporting Zimbabwean farmers to ensure freshness and community impact.',
    },
    {
      icon: 'shield-check',
      title: 'Health Focused',
      description: 'Free from artificial colours, preservatives, and sweeteners.',
    },
    {
      icon: 'recycle',
      title: 'Sustainability',
      description: 'Eco-friendly packaging and environmentally conscious production.',
    },
    {
      icon: 'cpu',
      title: 'Technology',
      description: 'Smart juice vending machines for on-the-go refreshment.',
    },
  ];
}
