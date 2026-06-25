import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface MarketSegment {
  icon: string;
  title: string;
  description: string;
}

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface DistributionChannel {
  icon: string;
  title: string;
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
}

@Component({
  selector: 'app-innovative-business',
  standalone: true,
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './innovative-business.component.html',
  styleUrls: ['./innovative-business.component.css'],
})
export class InnovativeBusinessComponent {
  readonly distribution: DistributionChannel[] = [
    { icon: 'shopping-cart', title: 'Supermarkets & retail' },
    { icon: 'map-pin', title: 'Hotels & restaurants' },
    { icon: 'users', title: 'Corporate offices' },
    { icon: 'gift', title: 'Direct to consumers' },
  ];

  readonly targetMarkets: MarketSegment[] = [
    {
      icon: 'heart',
      title: 'Urban Families',
      description: 'Nutritious, reliable beverage options for everyday home life.',
    },
    {
      icon: 'activity',
      title: 'Wellness Enthusiasts',
      description: 'Fitness-focused individuals seeking natural hydration and refreshment.',
    },
    {
      icon: 'trending-up',
      title: 'Busy Professionals',
      description: 'Convenient on-the-go drinks for demanding schedules.',
    },
    {
      icon: 'globe',
      title: 'Hospitality & Foodservice',
      description: 'Premium drink solutions for hotels, restaurants, and venues.',
    },
  ];

  readonly advantages: Advantage[] = [
    {
      icon: 'shield-check',
      title: 'Health-Focused Products',
      description: 'Free from artificial colours, preservatives, and sweeteners.',
    },
    {
      icon: 'recycle',
      title: 'Sustainability Leadership',
      description: 'Environmentally responsible packaging and production practices.',
    },
    {
      icon: 'cpu',
      title: 'Technology-Driven Convenience',
      description: 'Smart self-service juice vending machines for on-the-go refreshment.',
    },
    {
      icon: 'sprout',
      title: 'Locally Sourced Ingredients',
      description: 'Supporting Zimbabwean farmers for freshness and community impact.',
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
    },
    {
      id: 'careers',
      eyebrow: 'Careers',
      title: 'Join Our Growing Team',
      description:
        'We\'re building Zimbabwe\'s natural beverage industry. Opportunities in production, sales, innovation, and operations — browse open roles on HRXchange.',
      highlights: ['Production & operations', 'Sales & distribution', 'Innovation & technology'],
      icon: 'users',
      ctaLabel: 'View Careers',
      ctaLink: 'https://hrxchange.global/',
      external: true,
    },
  ];
}
