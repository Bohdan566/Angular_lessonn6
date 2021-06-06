import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import { ChosenUserComponent } from './components/chosen-user/chosen-user.component';
import {UserResolveService} from "./services/user-resolve.service";



@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    ChosenUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [UserService, UserResolveService]
})
export class UserModule { }
