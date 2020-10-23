import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'
@Component({
  selector: 'app-parent2component',
  templateUrl: './parent2component.component.html',
  styleUrls: ['./parent2component.component.css'],
})
export class Parent2componentComponent implements OnInit {

  public moderators:Array <any>;

  constructor(private moderatorService: UsersService) {
  this.moderators = moderatorService.getModerators(); }
  ngOnInit(): void {

  }

}
