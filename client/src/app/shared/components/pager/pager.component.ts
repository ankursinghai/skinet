import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss'],
})
export class PagerComponent implements OnInit {
  constructor() {}

  @Input() pageSize: number;
  @Input() totalCount: number;
  @Output() pageChanged = new EventEmitter<number>();

  ngOnInit(): void {}

  onPagerChanged(event: any) {
    this.pageChanged.emit(event.page);
  }
}
