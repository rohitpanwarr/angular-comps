import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  @Input() items = [];
  openItemedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onClickItem(index) {
    if (index === this.openItemedIndex) {
      this.openItemedIndex = -1;
    } else {
      this.openItemedIndex = index;
    }
  }

}
