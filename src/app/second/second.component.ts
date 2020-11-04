import { TagContentType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {

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
    console.log(this.listUnique)
  }

  unique(arr) {
    return Array.from(new Set(arr))
  }

}
