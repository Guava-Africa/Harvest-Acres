import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoweredByGuavaComponent } from '../powered-by-guava/powered-by-guava.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, PoweredByGuavaComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
}
