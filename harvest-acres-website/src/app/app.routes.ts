import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { CareersComponent } from './pages/careers/careers.component';
import { InnovationComponent } from './pages/innovation/innovation.component';
import { BusinessComponent } from './pages/business/business.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GovernanceComponent } from './pages/governance/governance.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'innovation', component: InnovationComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'governance', component: GovernanceComponent },
];
