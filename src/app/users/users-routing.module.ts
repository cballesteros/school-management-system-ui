import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersSaveComponent } from './users-save/users-save.component';
import { UsersViewComponent } from './users-view/users-view.component';

const routes: Routes = [
  {
    path: '',
    component: UsersViewComponent
  },
  {
    path: 'view',
    component: UsersViewComponent
  },
  {
    path: 'save',
    component: UsersSaveComponent
  },
  {
    path: 'save/:userId',
    component: UsersSaveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
