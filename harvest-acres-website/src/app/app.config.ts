import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';

// Lucide imports
import { LucideAngularModule, Leaf, Heart, Recycle, Cpu, Award, Users, Lightbulb, MapPin, Factory, TrendingUp, ShieldCheck, Globe, ShoppingCart, Activity, Gift } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    //  THIS IS THE FIX
    importProvidersFrom(
      LucideAngularModule.pick({
        Leaf,
        Heart,
        Recycle,
        Cpu,
        Award,
        Users,
        Lightbulb,
        MapPin,
        Factory,
        TrendingUp,
        ShieldCheck,
        Globe,
        ShoppingCart,
        Activity,
        Gift
      })
    )
  ]
};