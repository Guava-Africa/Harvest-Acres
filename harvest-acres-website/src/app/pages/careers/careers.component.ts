import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  standalone: true,
  template: '<p class="sr-only">Redirecting to careers…</p>',
})
export class CareersComponent implements OnInit {
  ngOnInit(): void {
    window.location.replace('https://hrxchange.global/');
  }
}
