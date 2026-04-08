import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

// Shared Components
import { PageWrapperComponent } from '../../shared/page-wrapper/page-wrapper.component';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { CardComponent } from '../../shared/card/card.component';

// Swiper
import { register } from 'swiper/element/bundle';

// Register Swiper web components
register();

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
  styleUrls: ['./services.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line
})
export class ServicesComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Customize Swiper settings
    const swiperEls = document.querySelectorAll('swiper-container');
    swiperEls.forEach(swiperEl => {
      Object.assign(swiperEl, {
        pagination: { clickable: true },
        navigation: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      });
    });
  }
}