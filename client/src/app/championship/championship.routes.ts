import { RouterConfig } from '@angular/router';
import { ChampionshipGreetingComponent } from './greeting/championship-greeting.component'; 

export const ChampionshipRoutes: RouterConfig = [
    {path: 'greeting', component: ChampionshipGreetingComponent}
];
