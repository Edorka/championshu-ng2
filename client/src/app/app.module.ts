import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RestangularModule } from 'ng2-restangular';
import { TEAMS_ROUTES } from './teams/teams.routes';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamShowComponent } from './team-show/team-show.component';
import { environment } from '../environments/environment';
import { TeamCreateDialogComponent } from './team-create-dialog/team-create-dialog.component';
import { TeamDeletionConfirmDialogComponent } from './teams/team-deletion-confirm-dialog.component';

const app_routes: Routes = [
  { path: 'teams', component: TeamListComponent, children:TEAMS_ROUTES },
  { path: '**', pathMatch: 'full', redirectTo: 'teams' }
];

// Function for settting the default restangular configuration
export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl(environment.APIEndpoint);
  RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
  RestangularProvider.addResponseInterceptor((data, operation, what, url, response)=> {
      if (operation === 'getList') {
          return data.items;

      }
      return data;
  });
}


export const app_routing = RouterModule.forRoot(app_routes);


@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamShowComponent,
    TeamCreateDialogComponent,
    TeamDeletionConfirmDialogComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FlexLayoutModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    FormsModule,
    HttpModule,
    app_routing,
  ],
  providers: [],
  entryComponents: [
    TeamCreateDialogComponent,
    TeamDeletionConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
