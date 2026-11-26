import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface ShelfProduct {
  icon: string;
  title: string;
  description: string;
  highlights: string[];
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
  readonly heroSlides = [
    {
      src: '/Images/cordial-lineup-transparent.png',
      alt: 'Four Harvest Acres 2L cordials in grape, lemon and lime, peach and granadilla, and pineapple',
      width: 1672,
      height: 941,
    },
    {
      src: '/Images/tamba-captain-pine.jpg',
      alt: 'Tamba Captain Pine pineapple drink served with fresh pineapple and ice',
      width: 1122,
      height: 1402,
    },
    {
      src: '/Images/cordials-family-breakfast.png',
      alt: 'A family sharing breakfast with four Harvest Acres cordials',
      width: 1254,
      height: 1254,
    },
  ];
  heroSlideIndex = 0;
  heroPlaying = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  heroHovered = false;
  private heroTimer?: number;

  statsAnimated = false;

  stats: Stat[] = [
    { label: 'Litres Produced Daily', target: 1500, suffix: 'L', display: 0 },
    { label: 'Monthly Capacity', target: 45000, suffix: 'L', display: 0 },
    { label: 'Artificial Additives', target: 0, suffix: '', display: 0 },
  ];

  shelfProducts: ShelfProduct[] = [
    {
      icon: 'glass-water',
      title: 'Mineral Water',
      description: 'Pure, crisp hydration in 500ml bottles — locally sourced and purified to the highest standards.',
      highlights: ['500ml', 'Pure', 'Locally Sourced'],
    },
    {
      icon: 'droplets',
      title: '2L Fruit Cordials',
      description: 'Bold, fruit-forward cordials perfect for sharing — rich flavour in every pour.',
      highlights: ['Grape', 'Lemon & Lime', 'Peach & Granadilla', 'Pineapple', '2 Litre'],
    },
    {
      icon: 'sparkles',
      title: 'Tamba Ready-to-Drink',
      description: 'Fun, character-led 300ml juices — grab-and-go refreshment with real fruit taste.',
      highlights: ['Gogo Grape', 'Captain Pine', 'Zing & Zang', 'Peachy & Dilla'],
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
    this.heroTimer = window.setInterval(() => {
      if (this.heroPlaying && !this.heroHovered && !document.hidden) {
        this.advanceHeroSlide(1);
      }
    }, 6000);
  }

  selectHeroSlide(direction: number): void {
    this.heroPlaying = false;
    this.advanceHeroSlide(direction);
  }

  private advanceHeroSlide(direction: number): void {
    const count = this.heroSlides.length;
    this.heroSlideIndex = (this.heroSlideIndex + direction + count) % count;
  }

  ngOnDestroy(): void {
    window.clearInterval(this.heroTimer);
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
