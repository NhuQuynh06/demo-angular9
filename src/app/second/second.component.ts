import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})

export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // ========================================
  // =========== transfer data ==============
  // ========================================

  @Output() send = new EventEmitter;

  @Input() nameDropdown: string;
  @Input() arrayDropdown: [];

  // ========================================
  // ========= function general =============
  // ========================================

  toppingsControl = new FormControl([]);

  onToppingRemoved(topping: string) {
    const toppings = this.toppingsControl.value as string[];
    this.removeFirst(toppings, topping);
    this.toppingsControl.setValue([""]);
    this.toppingsControl.setValue(toppings); // To trigger change detection
    this.send.emit(toppings);

  }

  private removeFirst<T>(array: T[], toRemove: T): void {
    const index = array.indexOf(toRemove);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  closePanel() {
    this.sendData();
  }

  sendData() {
    this.send.emit(this.toppingsControl.value);
  }


}
