import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelsRoutingModule } from './levels-routing.module';
import { CommonComponentsModule } from '../shared-modules/common-components.module';
import { MaterialModule } from '../shared-modules/material.module';
import { LevelsViewComponent } from './levels-view/levels-view.component';
import { LevelsSaveComponent } from './levels-save/levels-save.component';


@NgModule({
  declarations: [
    LevelsViewComponent,
    LevelsSaveComponent
  ],
  imports: [
    CommonModule,
    LevelsRoutingModule,
    MaterialModule,
    CommonComponentsModule,
  ]
})
export class LevelsModule { }
