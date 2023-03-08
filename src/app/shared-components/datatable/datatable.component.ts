import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Injectable, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { DatatableAction } from '../../../app/common/constants';
import { ViewConfig } from '../../../app/common/view.config';

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = 'Primera pagina';
  itemsPerPageLabel = 'Elementos por página';
  lastPageLabel = 'Última página';

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Siguiente';
  previousPageLabel = 'Anterior';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return 'Página 1 of 1'
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Página ${page + 1} de ${amountPages}`;
  }
}

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.sass'],
  providers: [{provide: MatPaginatorIntl, useClass: MyCustomPaginatorIntl}],
})
export class DatatableComponent implements AfterViewInit, OnInit, OnChanges {

  displayedColumns!: string[]

  @Input() searchValue = ''
  @Input() pageSize = 10
  @Input() pageSizeOptions = [10, 25, 50, 100]
  @Input() columnDefinition!: ViewConfig[]
  @Input() dataSource!: MatTableDataSource<any>;
  @Output() actionEvent = new EventEmitter<DatatableAction>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cdr: ChangeDetectorRef) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    const valueToSearch = changes['searchValue']?.currentValue
    if (valueToSearch) {      
      this.applyFilter(valueToSearch)
    }
  }

  ngOnInit(): void {
    this.displayedColumns = this.columnDefinition.map(c => c.columnDef)
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;      
    }, 1000);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);    
  }

  onActionEvent(eventData: any, data: any) {
    const action: DatatableAction = {
      ...eventData,
      data
    }
    this.actionEvent.emit(action)
  }
}
