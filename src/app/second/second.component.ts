import { TagContentType } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {

  // ========================================
  // =========== transfer data ==============
  // ========================================

  @Output() send = new EventEmitter;

  @Input() nameDropdown: string;
  @Input() arrayDropdown: [];

  // ========================================
  // ============= init value ===============
  // ========================================


  selectArray = [];
  arrayLatest = [];

  constructor() { }

  ngOnInit(): void {
  }

  // ========================================
  // ========= function general =============
  // ========================================
  
  deteItemListUnique(item) {
    this.arrayLatest = this.arrayLatest.filter(a => !item.includes(a));
  }

  handleChangeSelectMultiple(event: MatSelectChange) {
    this.selectArray.push(event.value);
  }

  method() {
    this.arrayLatest = this.selectArray[this.selectArray.length - 1]
  }

  // throws to parent
  throws() {
    this.send.emit(this.arrayLatest);
  }


}
