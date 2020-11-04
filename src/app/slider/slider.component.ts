import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  valueSlider = [
    { min: '1', max: '100' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
