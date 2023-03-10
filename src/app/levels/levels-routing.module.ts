import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelsSaveComponent } from './levels-save/levels-save.component';
import { LevelsViewComponent } from './levels-view/levels-view.component';

const routes: Routes = [
  {
    path: '',
    component: LevelsViewComponent
  },
  {
    path: 'view',
    component: LevelsViewComponent
  },
  {
    path: 'save',
    component: LevelsSaveComponent
  },
  {
    path: 'save/:id',
    component: LevelsSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelsRoutingModule { }
