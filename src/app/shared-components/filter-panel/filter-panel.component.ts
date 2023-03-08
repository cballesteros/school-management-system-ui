import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.sass']
})
export class FilterPanelComponent implements OnInit {

  users: any[] = []
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.users.push(
      {value: 1, viewValue: 'Administradores'},
      {value: 2, viewValue: 'Profesores'},
      {value: 3, viewValue: 'Estudiantes'},
      {value: 4, viewValue: 'Acudientes'},
      )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.searchEvent.emit(filterValue)
  }

}
