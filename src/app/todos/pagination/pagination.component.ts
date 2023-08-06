import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {faAngleDoubleRight, faAngleDoubleLeft} from '@fortawesome/free-solid-svg-icons'



@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  next = faAngleDoubleRight;
  prev = faAngleDoubleLeft;

  @Input()
  pages: number[] = [];
  currentPageIndex: number = 1;
  @Output() pageChange = new EventEmitter<number>();


  constructor() { }
  ngOnInit() {
  }



  changePage(event: number) {
    this.currentPageIndex = event;
    this.pageChange.emit(this.currentPageIndex);
  }

}
