import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DatatableComponent } from '../shared-components/datatable/datatable.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    DatatableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DatatableComponent,
    HttpClientModule
  ]
})
export class CommonComponentsModule { }
