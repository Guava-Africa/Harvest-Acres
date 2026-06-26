import { Component, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

interface GovernancePillar {
  icon: string;
  title: string;
  description: string;
}

interface GovernancePolicy {
  title: string;
  description: string;
}

@Component({
  selector: 'app-governance',
  standalone: true,
  imports: [RouterModule, LucideAngularModule],
  templateUrl: './governance.component.html',
  styleUrls: ['./governance.component.css'],
})
export class GovernanceComponent implements AfterViewInit, OnDestroy {
  private revealObserver?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  readonly pillars: GovernancePillar[] = [
    {
      icon: 'scale',
      title: 'Board & Management Oversight',
      description:
        'Clear accountability between leadership and management, with defined roles for strategic direction, operational execution, and performance review.',
    },
    {
      icon: 'shield-check',
      title: 'Ethics & Compliance',
      description:
        'A culture of integrity in procurement, partnerships, and customer relationships — aligned with applicable laws and industry standards.',
    },
    {
      icon: 'clipboard-check',
      title: 'Food Safety & Quality',
      description:
        'Rigorous hygiene, safety, and quality assurance across production — from ingredient sourcing through bottling and distribution.',
    },
    {
      icon: 'leaf',
      title: 'Environmental Stewardship',
      description:
        'Responsible packaging choices, waste reduction, and sustainable sourcing practices embedded in operational decision-making.',
    },
    {
      icon: 'alert-triangle',
      title: 'Risk Management',
      description:
        'Proactive identification and mitigation of operational, supply-chain, and reputational risks across the beverage value chain.',
    },
    {
      icon: 'users',
      title: 'Stakeholder Engagement',
      description:
        'Transparent communication with farmers, retail partners, hospitality clients, employees, and the communities we serve.',
    },
  ];

  readonly policies: GovernancePolicy[] = [
    {
      title: 'Code of Conduct',
      description:
        'Standards for ethical behaviour, anti-corruption, and fair dealing across all Harvest Acres operations and partnerships.',
    },
    {
      title: 'Quality Management System',
      description:
        'Documented procedures for production hygiene, batch traceability, and continuous improvement in beverage safety.',
    },
    {
      title: 'Supplier & Partner Standards',
      description:
        'Expectations for local farmers, distributors, and vendors on quality, safety, and responsible business practices.',
    },
    {
      title: 'Health & Safety',
      description:
        'Workplace safety protocols protecting employees across production, warehousing, and field operations.',
    },
    {
      title: 'Data & Privacy',
      description:
        'Responsible handling of customer, partner, and employee information in line with applicable regulations.',
    },
  ];

  ngAfterViewInit(): void {
    this.revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gv-revealed');
            this.revealObserver?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    this.el.nativeElement
      .querySelectorAll('.gv-reveal')
      .forEach((node) => this.revealObserver?.observe(node));
  }

  ngOnDestroy(): void {
    this.revealObserver?.disconnect();
  }
}
