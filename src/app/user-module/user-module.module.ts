import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserModuleComponent } from './user-module.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    UserModuleComponent,
    CreateUserComponent,
    ViewAllUsersComponent
  ],
  imports: [CommonModule, UserModuleRoutingModule, ReactiveFormsModule, FormsModule],
})
export class UserModuleModule {}
