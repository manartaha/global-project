import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id = 2;
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  execute() {
    this.userService.getUser(this.id).subscribe();
  }
}
