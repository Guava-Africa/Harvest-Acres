import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { GuavaLogoComponent } from '../guava-logo/guava-logo.component';

@Component({
  selector: 'app-powered-by-guava',
  standalone: true,
  imports: [NgClass, GuavaLogoComponent],
  templateUrl: './powered-by-guava.component.html',
  styleUrls: ['./powered-by-guava.component.css'],
})
export class PoweredByGuavaComponent {
  @Input() className = '';
  @Input() tone: 'light' | 'dark' = 'light';
  @Input() compact = false;

  get isDark(): boolean {
    return this.tone === 'dark';
  }
}
