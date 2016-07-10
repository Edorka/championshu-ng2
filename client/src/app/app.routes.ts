import { provideRouter, RouterConfig } from '@angular/router';
import { TeamListComponent } from './team-list';

export const routes: RouterConfig = [
  { path: 'teams', component: TeamListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

