import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './component/post/post.component';
import { PostsComponent } from './component/posts/posts.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
