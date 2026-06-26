import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

interface LeadershipRole {
  title: string;
  icon: string;
  focus: string;
  bio: string;
  photo?: string;
  photoAlt?: string;
}

interface OperationFact {
  icon: string;
  title: string;
  detail: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private revealObserver?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  readonly chairmanQuote =
    'At Harvest Acres, we believe that natural refreshment is essential to healthy, thriving communities. Our commitment to quality, integrity, and innovation drives us to craft beverages that Zimbabweans can trust — from locally sourced ingredients to every bottle on the shelf. We are building a varied beverage enterprise that serves families, businesses, and hospitality partners while championing sustainable practices across everything we do.';

  readonly chairman: LeadershipRole = {
    title: 'Chairman',
    icon: 'crown',
    focus: 'Strategic direction & governance',
    bio: 'Provides board leadership and long-term vision for Harvest Acres as a proudly Zimbabwean beverage enterprise.',
  };

  readonly generalManager: LeadershipRole = {
    title: 'General Manager',
    icon: 'briefcase',
    focus: 'Overall operations & growth',
    bio: 'Leads day-to-day execution across production, commercial, technical, and finance — aligning teams with the company vision to deliver health-conscious beverages nationwide through our retail and wholesale network.',
  };

  readonly departmentManagers: LeadershipRole[] = [
    {
      title: 'Production Manager',
      icon: 'factory',
      focus: 'Manufacturing & quality',
      bio: 'Oversees beverage processing at our Harare facility — from purified mineral water and fruit juices to cordials and ready-to-drink formats — with strict hygiene, safety, and quality control standards.',
    },
    {
      title: 'Sales and Marketing Manager',
      icon: 'megaphone',
      focus: 'Retail, wholesale & brand',
      bio: 'Drives market reach across urban families, wellness consumers, professionals, and hospitality — supplying supermarkets, hotels, restaurants, corporate offices, and direct-to-consumer channels.',
    },
    {
      title: 'Technical Manager',
      icon: 'cpu',
      focus: 'Innovation & smart solutions',
      bio: 'Leads technology-driven convenience initiatives including smart self-service juice vending, sustainable packaging, and planned expansions such as sugarcane juice, sparkling waters, and herbal infusions.',
    },
    {
      title: 'Finance Manager',
      icon: 'calculator',
      focus: 'Financial stewardship',
      bio: 'Manages financial planning and controls that support responsible growth, local partnerships, and investment in product expansion across Harvest Acres\' beverage portfolio.',
    },
  ];

  readonly coreValues: CoreValue[] = [
    {
      icon: 'lightbulb',
      title: 'Innovation',
      description:
        'Continuously expanding through smart dispensing solutions and a dynamic product range.',
    },
    {
      icon: 'leaf',
      title: 'Sustainability',
      description:
        'Committed to eco-friendly packaging, responsible sourcing, and reducing environmental impact.',
    },
    {
      icon: 'heart',
      title: 'Customer-Centricity',
      description:
        'Serving consumers and businesses with flexibility, responsiveness, and care.',
    },
    {
      icon: 'award',
      title: 'Quality First',
      description:
        'Dedicated to safe, high-standard beverages made with natural juices, powders, and concentrates.',
    },
  ];

  readonly operations: OperationFact[] = [
    {
      icon: 'map-pin',
      title: 'Headquarters',
      detail: 'No 1 Martin Road, Msasa, Harare',
    },
    {
      icon: 'factory',
      title: 'Production Facility',
      detail: 'Harare facility with advanced beverage processing systems',
    },
    {
      icon: 'trending-up',
      title: 'Production Capacity',
      detail: '1,500 litres daily (approximately 45,000 litres monthly)',
    },
    {
      icon: 'shield-check',
      title: 'Quality Assurance',
      detail: 'Strict hygiene, safety, and quality control standards',
    },
  ];

  ngAfterViewInit(): void {
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ab-revealed');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.el.nativeElement
      .querySelectorAll('.ab-reveal')
      .forEach((node) => this.revealObserver?.observe(node));
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
