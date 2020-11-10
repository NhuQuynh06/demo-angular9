import { TagContentType } from '@angular/compiler';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';

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
  selectedValue: '';
  listSelected = [];
  listUnique = [];


  constructor() { }

  ngOnInit(): void {
  }

  updateSelected() {
    this.listSelected.push(this.selectedValue);
    this.listUnique = this.unique(this.listSelected);
  }

  deteItemListUnique(item) {
    this.listUnique = this.listUnique.filter(a => !item.includes(a));
  }

  unique(arr) {
    return Array.from(new Set(arr))
  }

  // throws to parent
  throws(){
    this.send.emit(this.listUnique);
  }

}
