import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UserDetailsFromStateComponent } from './components/user-details-from-state/user-details-from-state.component';
import { UserDetailsFromServerComponent } from './components/user-details-from-server/user-details-from-server.component';
import {UserResolveService} from "./services/user-resolve.service";

let routes: Routes = [
  {
    path: 'detailsFromState/:id', component: UserDetailsFromStateComponent
  },
 {
    path: 'userDetailsFromServer/:id', component: UserDetailsFromServerComponent, resolve: {userData: UserResolveService}
  },
  {
    path: 'posts', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UserDetailsFromStateComponent,
    UserDetailsFromServerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
