import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-parent1component',
  templateUrl: './parent1component.component.html',
  styleUrls: ['./parent1component.component.css'],
})
export class Parent1componentComponent implements OnInit {



  public users:Array <any>;
  public admins:Array <any>;
  constructor(private userService: UsersService, private adminService: UsersService) {
  this.users = userService.getUsers();
  this.admins = adminService.getAdmins();}



  ngOnInit(): void {
  }

}
