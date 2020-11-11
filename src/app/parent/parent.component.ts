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
  foods = [
    { value: '0', viewValue: 'mot' },
    { value: '1', viewValue: 'hai' },
    { value: '2', viewValue: 'ba' },
    { value: '3', viewValue: 'bon' },
    { value: '4', viewValue: 'nam' },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  // ========================================
  // ========= function general =============
  // ========================================

  some(e) {
    this.value = e;
  }

  toSlider(e) {
    this.valueSlider = e
  }


}
