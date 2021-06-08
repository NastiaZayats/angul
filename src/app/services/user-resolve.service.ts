import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User>{

  constructor(private userService: UserService) { }

  // @ts-ignore
  resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
 return this.userService.getUserById(activatedRouteSnapshot.params.id)

  }

}
