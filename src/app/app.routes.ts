import { Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
];
