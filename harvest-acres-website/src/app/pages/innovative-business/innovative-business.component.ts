import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface MarketSegment {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface DistributionChannel {
  icon: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface PillarPlatform {
  name: string;
  logo: string;
  logoAlt: string;
  description: string;
}

interface PillarSection {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
  ctaLabel: string;
  ctaLink: string;
  external?: boolean;
  image?: string;
  imageAlt?: string;
  platform?: PillarPlatform;
}

@Component({
  selector: 'app-innovative-business',
  standalone: true,
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './innovative-business.component.html',
  styleUrls: ['./innovative-business.component.css'],
})
export class InnovativeBusinessComponent implements AfterViewInit, OnDestroy {
  private revealObserver?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  readonly distribution: DistributionChannel[] = [
    {
      icon: 'shopping-cart',
      title: 'Retail & Supermarkets',
      description:
        'Stocked on shelves across national chains and neighbourhood stores — making Harvest Acres accessible wherever Zimbabwe shops.',
      image: '/Images/retail.png',
      imageAlt: 'Harvest Acres products in retail and supermarket settings',
    },
    {
      icon: 'map-pin',
      title: 'Hotels & Restaurants',
      description:
        'Premium beverage supply for hospitality and foodservice — from boutique hotels to busy restaurant kitchens.',
      image: '/Images/Hotels%20and%20restaurants.png',
      imageAlt: 'Harvest Acres beverages served in hotels and restaurants',
    },
    {
      icon: 'users',
      title: 'Corporate Offices',
      description:
        'Reliable bulk hydration for workplaces, boardrooms, and corporate events — keeping teams refreshed throughout the day.',
      image: '/Images/corporate%20room.png',
      imageAlt: 'Harvest Acres products in a corporate meeting room',
    },
    {
      icon: 'gift',
      title: 'Direct to Consumers',
      description:
        'Delivered straight to homes and businesses — convenient access to natural drinks without leaving your doorstep.',
      image: '/Images/Drirect%20to%20consumer.png',
      imageAlt: 'Harvest Acres direct-to-consumer delivery',
    },
  ];

  readonly targetMarkets: MarketSegment[] = [
    {
      icon: 'heart',
      title: 'Urban Families',
      description:
        'Households looking for trusted, family-friendly drinks for meals, school lunches, and everyday refreshment.',
      tags: ['Home', 'Family packs', 'Retail'],
    },
    {
      icon: 'activity',
      title: 'Wellness Enthusiasts',
      description:
        'Active lifestyles and fitness communities that value natural hydration without artificial additives.',
      tags: ['Fitness', 'Natural', 'On-the-go'],
    },
    {
      icon: 'trending-up',
      title: 'Busy Professionals',
      description:
        'Office teams and commuters who need reliable, convenient beverages throughout demanding workdays.',
      tags: ['Corporate', 'Convenience', 'Bulk supply'],
    },
    {
      icon: 'globe',
      title: 'Hospitality Buyers',
      description:
        'Procurement and F&B managers sourcing premium beverage lines for hotels, restaurants, and venues.',
      tags: ['B2B', 'Hotels', 'Foodservice'],
    },
  ];

  readonly featuredAdvantages: Advantage[] = [
    {
      icon: 'shield-check',
      title: 'Health-Focused Products',
      description:
        'Formulated without artificial colours, preservatives, or sweeteners — aligned with health-conscious retail and hospitality buyers.',
    },
    {
      icon: 'sprout',
      title: 'Locally Sourced Ingredients',
      description:
        'Fresh produce and inputs from Zimbabwean farmers — strengthening local supply chains and community impact.',
    },
  ];

  readonly secondaryAdvantages: Advantage[] = [
    {
      icon: 'recycle',
      title: 'Sustainability Leadership',
      description:
        'Responsible packaging choices and production practices that reduce environmental footprint at scale.',
    },
    {
      icon: 'cpu',
      title: 'Technology-Driven Convenience',
      description:
        'Smart self-service juice vending at supermarkets, malls, and gyms — refreshment where people already gather.',
    },
  ];

  readonly pillars: PillarSection[] = [
    {
      id: 'partnerships',
      eyebrow: 'Business',
      title: 'Partner With Harvest Acres',
      description:
        'Wholesale, hospitality supply, and retail partnerships — let\'s bring natural beverages to your customers through our robust distribution network.',
      highlights: ['Wholesale & distribution', 'Hospitality supply', 'Retail partnerships'],
      icon: 'shopping-cart',
      ctaLabel: 'Contact Sales',
      ctaLink: '/contact',
      image: '/Images/Handshake.png',
      imageAlt: 'Business partnership handshake — partner with Harvest Acres',
    },
    {
      id: 'innovation',
      eyebrow: 'Innovation',
      title: 'Smart Beverage Solutions',
      description:
        'From interactive juice vending at supermarkets, malls, and gyms to sustainable packaging — Harvest Acres is reimagining how Zimbabwe enjoys natural refreshment.',
      highlights: ['Juice vending machines', 'Sustainable packaging', 'Product expansion'],
      icon: 'cpu',
      ctaLabel: 'Explore Products',
      ctaLink: '/services',
      image: '/Images/smart%20manufacturing.jpg',
      imageAlt: 'Smart manufacturing at Harvest Acres beverage production facility',
    },
    {
      id: 'careers',
      eyebrow: 'Careers',
      title: 'Join Our Growing Team',
      description:
        'We\'re building Zimbabwe\'s natural beverage industry with opportunities in production, sales, innovation, and operations. Job postings and HR management are handled through HRXchange.',
      highlights: [
        'Browse and apply to open roles online',
        'Recruitment & HR management in one place',
        'Production, sales, innovation & operations',
      ],
      icon: 'users',
      ctaLabel: 'Browse Jobs on HRXchange',
      ctaLink: 'https://hrxchange.global/',
      external: true,
      platform: {
        name: 'HRXchange',
        logo: '/Images/HRX%20logo-2.png',
        logoAlt: 'HRXchange — job postings and HR management platform',
        description:
          'HRXchange powers our careers portal — where candidates find openings and our team manages recruitment and HR.',
      },
    },
  ];

  ngAfterViewInit(): void {
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ib-revealed');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    this.el.nativeElement
      .querySelectorAll('.ib-reveal')
      .forEach((node) => this.revealObserver?.observe(node));
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
