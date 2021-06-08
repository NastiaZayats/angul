import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details-from-server',
  templateUrl: './user-details-from-server.component.html',
  styleUrls: ['./user-details-from-server.component.css']
})
export class UserDetailsFromServerComponent implements OnInit {

  userFromServer: User;

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      let id = value.id;
      this.userService.getUserById(id).subscribe(userResponse =>
        this.userFromServer = userResponse)
    })
    this.activatedRoute.data.subscribe(data => console.log(data))
  }

  ngOnInit(): void {
  }

}
