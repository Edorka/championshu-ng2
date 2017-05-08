import {  Routes } from '@angular/router';
import { TeamListComponent } from '../team-list/team-list.component';
import { TeamShowComponent } from '../team-show/team-show.component';

export const TEAMS_ROUTES: Routes = [
  { path: 'teams/:id', component: TeamShowComponent }
];
