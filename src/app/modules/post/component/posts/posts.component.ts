import { Component, OnInit } from '@angular/core';
import {DataTransferService} from "../../../../services/data-transfer.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dataTransfer: DataTransferService) {
    console.log(this.dataTransfer.store.getValue());
  }

  ngOnInit(): void {
  }

}
