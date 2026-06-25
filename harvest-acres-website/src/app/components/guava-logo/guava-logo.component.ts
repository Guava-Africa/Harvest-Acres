import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

type GuavaLogoSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
type GuavaLogoVariant = 'icon' | 'full';

@Component({
  selector: 'app-guava-logo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './guava-logo.component.html',
  styleUrls: ['./guava-logo.component.css'],
})
export class GuavaLogoComponent {
  @Input() className = '';
  @Input() size: GuavaLogoSize = 'md';
  @Input() variant: GuavaLogoVariant = 'full';
  @Input() withHoverGlow = true;

  readonly logoSrc = '/Images/guava-logo-transparent.png';

  private readonly sizeClasses: Record<GuavaLogoSize, Record<GuavaLogoVariant, string>> = {
    sm: { full: 'h-7', icon: 'h-7 w-7' },
    md: { full: 'h-10', icon: 'h-10 w-10' },
    lg: { full: 'h-14', icon: 'h-14 w-14' },
    xl: { full: 'h-20', icon: 'h-20 w-20' },
    '2xl': { full: 'h-28', icon: 'h-28 w-28' },
  };

  get sizeClass(): string {
    return this.sizeClasses[this.size][this.variant];
  }
}
