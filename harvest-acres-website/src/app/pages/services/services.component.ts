import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface ProductItem {
  icon: string;
  title: string;
  description: string;
  details: string[];
  highlights: string[];
  image: string;
  imageAlt: string;
}

interface DistributionChannel {
  icon: string;
  title: string;
  description: string;
}

interface ExpandingItem {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements AfterViewInit, OnDestroy {
  private showcaseObserver?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}
  readonly products: ProductItem[] = [
    {
      icon: 'glass-water',
      title: 'Mineral Water',
      description:
        'Pure, crisp hydration in 500ml bottles — locally sourced and purified for everyday refreshment at home, work, or on the go.',
      details: [
        'Naturally filtered with essential minerals for a clean, balanced taste.',
        'No artificial flavours, colours, or preservatives.',
      ],
      highlights: ['500ml', 'Pure', 'Locally Sourced'],
      image: '/Images/water%20final.png',
      imageAlt: 'Harvest Acres mineral water bottles',
    },
    {
      icon: 'droplets',
      title: '2L Fruit Cordials',
      description:
        'Bold, fruit-forward cordials in family-size 2 litre bottles — perfect for sharing at home, events, and hospitality.',
      details: [
        'Made with real fruit concentrates and natural flavouring.',
        'Free from artificial colours and preservatives — simply dilute to taste.',
      ],
      highlights: ['Grape', 'Peach & Granadilla', '2 Litre'],
      image: '/Images/Coridals.png',
      imageAlt: 'Harvest Acres 2 litre fruit cordials',
    },
    {
      icon: 'sparkles',
      title: 'Tamba Ready-to-Drink',
      description:
        'Character-led 500ml fruit juices — grab-and-go refreshment with vibrant flavours kids and families love.',
      details: [
        'Blended with fruit juices and naturally inspired ingredients.',
        'No artificial additives — just real fruit taste in every sip.',
      ],
      highlights: ['Gogo Grape', 'Captain Pine', 'Zinga Zang', 'Peach & Dyla'],
      image: '/Images/Fruit%20drinks%20line%20up.png',
      imageAlt: 'Harvest Acres Tamba ready-to-drink fruit juice lineup',
    },
  ];

  readonly expanding: ExpandingItem[] = [
    {
      icon: 'zap',
      title: 'Sugarcane Juice',
      description:
        'Fresh-pressed from Zimbabwean sugarcane — natural, energizing hydration.',
      highlights: ['Fresh-Pressed', 'Natural Energy'],
    },
    {
      icon: 'sparkles',
      title: 'Flavoured & Sparkling Water',
      description:
        'Light fruit infusions and crisp sparkling refreshment for everyday hydration.',
      highlights: ['Sparkling', 'Infused'],
    },
    {
      icon: 'sprout',
      title: 'Baobab Drink',
      description:
        'Creamy baobab goodness rich in Vitamin C — a true Zimbabwean superfruit.',
      highlights: ['Vitamin C', 'Superfruit'],
    },
    {
      icon: 'leaf',
      title: 'Iced Tea & Herbal Infusions',
      description:
        'Cooling iced tea and wellness blends — starting with Lemon & Mint.',
      highlights: ['Lemon & Mint', 'Herbal Blends'],
    },
  ];

  readonly distribution: DistributionChannel[] = [
    {
      icon: 'shopping-cart',
      title: 'Retail Stores',
      description: 'Supermarkets and local shops nationwide.',
    },
    {
      icon: 'map-pin',
      title: 'Hotels & Restaurants',
      description: 'Serving the hospitality industry across Zimbabwe.',
    },
    {
      icon: 'users',
      title: 'Corporate Offices',
      description: 'Bulk supply for workplaces and events.',
    },
    {
      icon: 'gift',
      title: 'Direct Delivery',
      description: 'Home and business delivery available on request.',
    },
  ];

  ngAfterViewInit(): void {
    this.showcaseObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.showcaseObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -32px 0px' }
    );

    this.el.nativeElement
      .querySelectorAll('.products-showcase-visual')
      .forEach((node) => this.showcaseObserver?.observe(node));
  }

  ngOnDestroy(): void {
    this.showcaseObserver?.disconnect();
  }
}
