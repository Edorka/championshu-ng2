import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ng2-restangular';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  constructor(private restangular: Restangular) { }

  ngOnInit() {
    this.restangular.one('users', 2).all('accounts').getList();
  }

}
