import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatatableComponent } from '../shared-components/datatable/datatable.component';
import { DialogComponent } from '../shared-components/dialog/dialog.component';
import { FilterPanelComponent } from '../shared-components/filter-panel/filter-panel.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    DatatableComponent,
    FilterPanelComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DatatableComponent,
    FilterPanelComponent,
    DialogComponent,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CommonComponentsModule { }
