import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent }      from './components/about/about.component';
import { HomeComponent }      from './components/home/home.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'home',
      component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);