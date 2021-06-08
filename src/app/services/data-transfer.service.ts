import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
 // @ts-ignore
  store = new BehaviorSubject<User>('default');

  constructor() { }
}
