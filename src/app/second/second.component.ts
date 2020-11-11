import { TagContentType } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {
  //  output
  @Output() send = new EventEmitter;

  //  init value
  foods = [
    { value: '0', viewValue: 'mot' },
    { value: '1', viewValue: 'hai' },
    { value: '2', viewValue: 'ba' },
    { value: '3', viewValue: 'bon' },
    { value: '4', viewValue: 'nam' },
  ];

  selectArray = [];
  arrayLatest = [];

  constructor() { }

  ngOnInit(): void {
  }

  deteItemListUnique(item) {
    this.arrayLatest = this.arrayLatest.filter(a => !item.includes(a));
  }

  // unique(arr) {
  //   return Array.from(new Set(arr))
  // }

  
  handleChangeSelectMultiple(event: MatSelectChange) {
    this.selectArray.push(event.value);
  }
  
  method() {
    this.arrayLatest = this.selectArray[this.selectArray.length - 1]
  }

  // throws to parent
  throws(){
    this.send.emit(this.arrayLatest);
  }


}
