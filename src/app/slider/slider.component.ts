import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  //  output
  @Output() sendData = new EventEmitter;

  min = 10;
  max = 100;
  valueSlider ;
  constructor() { }

  ngOnInit(): void {
    
  }

  formatLabel(value: any) {
    return value
  }

  handleChangeSlider(event: MatSliderChange) {
    this.valueSlider = event.value;
    // throws to parent
    this.sendData.emit(this.valueSlider);
  }
  
}