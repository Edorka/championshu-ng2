import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Restangular } from 'ng2-restangular';

@Component({
  selector: 'app-team-create-dialog',
  templateUrl: './team-create-dialog.component.html',
  styleUrls: ['./team-create-dialog.component.css']
})
export class TeamCreateDialogComponent implements OnInit {
  team
  error
  constructor(public dialogRef: MdDialogRef<TeamCreateDialogComponent>,
              private restangular: Restangular) {}
  ngOnInit() {
    this.team = { name: 'put a name' };
    this.error = false;
  }
  requestSave(event){
      this.restangular.all('teams').post(this.team);
  }
}
