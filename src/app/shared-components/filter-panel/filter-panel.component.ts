import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { SelectValue, USER_TYPES_SELECT } from 'src/app/common/constants';
import { SearchData } from 'src/app/common/search.model';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.sass']
})
export class FilterPanelComponent implements OnInit {

  users: SelectValue[] = USER_TYPES_SELECT
  @Output() searchEvent = new EventEmitter<SearchData>();

  constructor() { }

  ngOnInit(): void {

  }

  applyFilter(event: any, type: 'input' | 'select') {
    const value = ('target' in event) ? (event.target as HTMLInputElement).value : (event as MatSelectChange).value
    const searchData: SearchData = {type, value}
    this.searchEvent.emit(searchData)
  }

}
