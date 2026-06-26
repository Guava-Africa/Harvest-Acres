import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { InnovativeBusinessComponent } from './pages/innovative-business/innovative-business.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GovernanceComponent } from './pages/governance/governance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'innovative-business', component: InnovativeBusinessComponent },
  { path: 'innovation', redirectTo: 'innovative-business', pathMatch: 'full' },
  { path: 'business', redirectTo: 'innovative-business', pathMatch: 'full' },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'governance', component: GovernanceComponent },
  { path: 'corporate-governance', redirectTo: 'governance', pathMatch: 'full' },
  { path: 'our-team', redirectTo: 'about', pathMatch: 'full' },
];
