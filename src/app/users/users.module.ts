import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersViewComponent } from './users-view/users-view.component';
import { MaterialModule } from '../shared-modules/material.module';
import { CommonComponentsModule } from '../shared-modules/common-components.module';


@NgModule({
  declarations: [
    UsersViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    CommonComponentsModule
  ]
})
export class UsersModule { }
