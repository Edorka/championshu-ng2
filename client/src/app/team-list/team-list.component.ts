import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import { MdDialog, MdDialogConfig } from '@angular/material';
import { TeamCreateDialogComponent } from '../team-create-dialog/team-create-dialog.component';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent implements OnInit {
  teams: any[];
  newTeam;
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
    this.restangular.all('teams').getList().subscribe(teams => {
      this.teams = teams;
      console.log( 'loaded teams', this.teams );
    });
  }
  addTeam(event) {
     console.log('pre dialog');
     let dialogRef = this.dialog.open(TeamCreateDialogComponent, this.config);
     console.log('dialog', dialogRef);
     dialogRef.afterClosed().subscribe(result => {
       this.newTeam = result;
     });
  }

}
