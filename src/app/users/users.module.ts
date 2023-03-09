import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersViewComponent } from './users-view/users-view.component';
import { MaterialModule } from '../shared-modules/material.module';
import { CommonComponentsModule } from '../shared-modules/common-components.module';
import { UsersSaveComponent } from './users-save/users-save.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';


@NgModule({
  declarations: [
    UsersViewComponent,
    UsersSaveComponent,
    UsersDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    CommonComponentsModule
  ]
})
export class UsersModule { }
