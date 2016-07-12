import { provideRouter, RouterConfig } from '@angular/router';
import { TeamListComponent } from './team-list';
import { ChampionshipRoutes } from './championship/championship.routes';

export const routes: RouterConfig = [
  ...ChampionshipRoutes,
  { path: 'teams', component: TeamListComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

