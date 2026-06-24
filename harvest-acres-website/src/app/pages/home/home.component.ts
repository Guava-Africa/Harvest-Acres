import { Component, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface Advantage {
  icon: string;
  title: string;
  description: string;
}

interface ProductShowcase {
  image: string;
  alt: string;
  title: string;
  description: string;
  tagline?: string;
  flavors?: string[];
  badges?: string[];
}

interface Product {
  icon: string;
  title: string;
  description: string;
  flavors?: string[];
}

interface Stat {
  label: string;
  target: number;
  suffix: string;
  display: number;
}

interface PipelineStep {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private statsObserver?: IntersectionObserver;
  statsAnimated = false;

  stats: Stat[] = [
    { label: 'Litres Produced Daily', target: 1500, suffix: 'L', display: 0 },
    { label: 'Monthly Capacity', target: 45000, suffix: 'L', display: 0 },
    { label: 'Artificial Additives', target: 0, suffix: '', display: 0 },
  ];

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

  products: Product[] = [
    {
      icon: 'droplets',
      title: 'Fruit Juices',
      description: 'Crafted from natural juices, powders, and concentrates.',
      flavors: ['Baobab', 'Orange', 'Apple', 'Mango', 'Mixed Fruit'],
    },
    {
      icon: 'glass-water',
      title: 'Mineral Water',
      description: 'Pure & refreshing — locally sourced and purified to the highest standards.',
    },
    {
      icon: 'sparkles',
      title: 'Sparkling Water',
      description: 'Crisp, carbonated refreshment with natural mineral content.',
    },
  ];

  productShowcases: ProductShowcase[] = [
    {
      image: '/images/harvest-acres-juices.png',
      alt: 'Harvest Acres fruit juice range — Baobab, Orange, Apple, Mango, and Mixed Fruit',
      title: 'Fruit Juices',
      tagline: 'Five bold flavours',
      description: 'Crafted from natural juices, powders, and concentrates — each bottle bursting with the taste of real fruit.',
      flavors: ['Baobab', 'Orange', 'Apple', 'Mango', 'Mixed Fruit'],
    },
    {
      image: '/images/harvest-acres-mineral-water.png',
      alt: 'Harvest Acres Mineral Water — Pure and Refreshing',
      title: 'Mineral Water',
      tagline: 'Pure & Refreshing',
      description: 'Locally sourced mineral water, purified to the highest quality standards for clean, crisp hydration.',
      badges: ['Pure', 'High Quality', 'Locally Sourced'],
    },
  ];

  comingSoon: Product[] = [
    {
      icon: 'zap',
      title: 'Sugarcane Juice',
      description: 'Fresh-pressed for natural, energizing hydration.',
    },
    {
      icon: 'droplets',
      title: 'Flavoured Water',
      description: 'Lightly infused options for enhanced refreshment.',
    },
    {
      icon: 'cpu',
      title: 'Juice Machines',
      description: 'Interactive vending at supermarkets, malls, and gyms.',
    },
    {
      icon: 'leaf',
      title: 'Herbal Infusions',
      description: 'Wellness blends designed for the mindful consumer.',
    },
  ];

  pipeline: PipelineStep[] = [
    {
      icon: 'sprout',
      title: 'Local Farms',
      description: 'Partnering with Zimbabwean SME farmers for the freshest produce.',
    },
    {
      icon: 'factory',
      title: 'Processing',
      description: 'Eco-friendly production at our Harare facility.',
    },
    {
      icon: 'shield-check',
      title: 'Quality Check',
      description: 'Strict hygiene, safety, and quality control at every stage.',
    },
    {
      icon: 'shopping-cart',
      title: 'Your Table',
      description: 'Delivered to retailers, hospitality, and homes nationwide.',
    },
  ];

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    this.setupScrollReveal();
    this.setupStatsCounter();
    this.updateHeroParallax();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.updateHeroParallax();
  }

  private updateHeroParallax(): void {
    const wrap = this.el.nativeElement.querySelector('.hero-visual-wrap') as HTMLElement | null;
    if (!wrap) return;
    const offset = Math.min(window.scrollY * 0.15, 60);
    wrap.style.setProperty('--hero-parallax', `${offset}px`);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.statsObserver?.disconnect();
  }

  private setupScrollReveal(): void {
    const elements = this.el.nativeElement.querySelectorAll('.reveal');
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
    );
    elements.forEach((element) => this.observer?.observe(element));
  }

  private setupStatsCounter(): void {
    const statsSection = this.el.nativeElement.querySelector('#stats-section');
    if (!statsSection) return;

    this.statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.statsAnimated) {
          this.statsAnimated = true;
          this.animateStats();
        }
      },
      { threshold: 0.4 }
    );
    this.statsObserver.observe(statsSection);
  }

  private animateStats(): void {
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      this.stats = this.stats.map((stat) => ({
        ...stat,
        display: Math.round(stat.target * eased),
      }));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }

  formatStat(stat: Stat): string {
    if (stat.target === 0) return 'Zero';
    return stat.display.toLocaleString() + stat.suffix;
  }
}
