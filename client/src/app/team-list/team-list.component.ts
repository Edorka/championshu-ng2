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
    let dialogRef = this.dialog.open(TeamCreateDialogComponent, this.config);
    dialogRef.afterClosed().subscribe(result => {
      this.teams.unshift(result);
    });
  }
  remove(team){
    team.remove().subscribe((confirmed)=>{
      let index = this.teams.indexOf(team, 0);
      if (index > -1) {
         this.teams.splice(index, 1);
      }
    })


  }

}
