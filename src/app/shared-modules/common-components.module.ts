import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DatatableComponent } from '../shared-components/datatable/datatable.component';
import { FilterPanelComponent } from '../shared-components/filter-panel/filter-panel.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    DatatableComponent,
    FilterPanelComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    DatatableComponent,
    FilterPanelComponent,
    HttpClientModule,
  ]
})
export class CommonComponentsModule { }
