import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { RestangularModule } from 'ng2-restangular';
import { TeamListComponent } from './team-list/team-list.component';
import { environment } from '../environments/environment';
import { TeamCreateDialogComponent } from './team-create-dialog/team-create-dialog.component';

const app_routes: Routes = [
  { path: 'teams', component: TeamListComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
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
    TeamCreateDialogComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [],
  entryComponents: [TeamCreateDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
