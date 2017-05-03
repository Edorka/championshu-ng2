import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { Restangular } from 'ng2-restangular';

@Component({
  selector: 'app-team-deletion-confirm-dialog',
  templateUrl: './team-deletion-confirm-dialog.component.html',
  styleUrls: ['./team-deletion-confirm-dialog.component.css']
})
export class TeamDeletionConfirmDialogComponent implements OnInit {
  team: any;
  error: boolean;
  constructor(public dialogRef: MdDialogRef<TeamDeletionConfirmDialogComponent>,
              private restangular: Restangular) {}
  ngOnInit() {
    this.error = false;
  }
  confirm(){
    console.log('team to delete', this.team);
    this.team.remove().subscribe((confirmed)=>{
        this.dialogRef.close(this.team);
    });
  }
  cancel(){
    this.dialogRef.close(false);
  }
}
