import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { TeamCreateDialogComponent } from '../team-create-dialog/team-create-dialog.component';
import { TeamDeletionConfirmDialogComponent } from '../teams/team-deletion-confirm-dialog.component';
import { TeamShowComponent } from '../team-show/team-show.component';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  teams: any[]
  newTeam
  config: MdDialogConfig = {
        disableClose: false,
        width: '',
        height: '',
        position: {
          top: '',
          bottom: '',
          left: '',
          right: ''
        }
    };
  constructor(private restangular: Restangular,
              public dialog: MdDialog) { }
  ngOnInit() {
    this.load();
  }
  load(){
    this.restangular.all('teams').getList().subscribe(teams => {
      this.teams = teams;
    });
  }
  addTeam(event) {
    let dialogRef = this.dialog.open(TeamCreateDialogComponent, this.config);
    dialogRef.afterClosed().subscribe(result => {
      this.teams.unshift(result);
    });
  }
  remove(team){
    let dialogRef = this.dialog.open(TeamDeletionConfirmDialogComponent, this.config);
    let instance = dialogRef.componentInstance;
    instance.team = team;
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.removeConfirmed(result);
    });
  };
  removeConfirmed(team){
    let index = this.teams.indexOf(team, 0);
    if ( index > -1 ) {
       this.teams.splice(index, 1);
    }
  };
}
