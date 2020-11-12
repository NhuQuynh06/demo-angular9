import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  // ========================================
  // ============= init value ===============
  // ========================================
  value = '';
  valueSlider: number;
  currentName = 'Domain/ Website';
  toppingList: string[] = [
    "Extra cheese",
    "Mushroom",
    "Onion",
    "Pepperoni",
    "Sausage",
    "Tomato"
  ];

  constructor() { }

  ngOnInit(): void {

  }

  // ========================================
  // ========= function general =============
  // ========================================

  some(e) {
    // debugger;
    // console.log('log e', e);
    // Reference - deepcopy
    this.value = JSON.parse(JSON.stringify(e));
    // console.log('log value', this.value)
    // debugger;
  }

  toSlider(e) {
    this.valueSlider = e
  }


}
