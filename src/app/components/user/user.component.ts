import {Component, Input, OnInit, Output} from '@angular/core';
import {User} from "../../models/user";
import {ActivatedRoute, Router} from "@angular/router";
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  @Output()
  lift = new EventEmitter();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  userDetails() {
    this.router.navigate(['detailsFromState', this.user.id], {
      relativeTo: this.activatedRoute,
      state: this.user
    })
  }

  lifting(): void {
    this.lift.emit(this.user)

  }
}
